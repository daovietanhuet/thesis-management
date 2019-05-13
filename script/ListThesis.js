const list_thesis = Vue.component('list_thesis', {
    data() {
        return {
            userRole: window.localStorage.getItem('userRole'),
            loading: true,
            theses: [],
            studentThesisInfo: [],
            lecturerThesisInfo: [],
            user_info: null,
            renderOwn: false,
            isOpenThesisModal: false,
            thesis: null,
            defaultThesis: {
                thesisSubject: 'Thêm chủ đề cho khóa luận',
                thesisCode: 'Mã khóa luận',
                branch: 'Thêm Khoa cho khóa luận',
                university: 'Thêm Trường cho khóa luận',
                state: 'NEW',
                lecturerId: 'NaN',
                describle: 'Thêm mô tả cho khóa luận'
            }
        }
    },
    methods: {
        getListThesis() {
            this.loading = true
            request('/thesis/info', 'GET')
                .then (result => {
                    this.theses = result.result;
                    this.renderOwn = false;
                    this.loading = false;
                })
        },
        getOwnThesis() {
            request('/thesis/info', 'GET', 'section=self')
                .then (result => {
                    if(this.userRole === 'STU'){
                        if(!result.result || !result.result[0] || result.result === []) this.studentThesisInfo = []
                        else this.studentThesisInfo = result.result
                    } else if(this.userRole === 'LEC')
                        if(!result.result || !result.result[0] || result.result === []) this.lecturerThesisInfo = []
                        this.lecturerThesisInfo = result.result
                })
        },
        studentThesis(thesisId, thesisState) {
            let config = {}
            if(thesisState === 'NEW') {
                config = {endpoint: 'join/', title: 'Đăng ký khóa luận '}
            } else {
                config = {endpoint: 'exit/', title: 'Hủy đăng ký khóa luận '}
            }
            request('/student/thesis/'+config.endpoint+thesisId, 'POST')
                    .then (result => {
                        if(result && result.httpCode && result.httpCode === 200){
                            this.getListThesis()
                            this.getOwnThesis()
                            this.$emit('arlert', 'arlert-success',config.title + 'thành công')
                        } else {
                            this.$emit('arlert', 'arlert-error',config.title + 'không thành công')
                        }
                    })
                    .catch(error => {
                        this.$emit('arlert', 'arlert-error',config.title + 'thành công')
                    })
        },
        lecturerThesisBtn1(thesisId, thesisState){
            let config = {}
            switch (thesisState) {
                case 'NEW': config = {endpoint: 'describle/', title: 'Sửa khóa luận ',  methods: 'PATCH'}; break;
                case 'WAITTING': config = {endpoint: 'accept/', title: 'Chấp nhận đăng ký khóa luận ',  methods: 'POST'}; break;
                case 'ACTIVE': config = {endpoint: 'mark/', title: 'Chấm điểm khóa luận ', methods: 'PATCH'}; break;
            }
            request('/lecturer/thesis/'+config.endpoint+thesisId, config.methods)
                    .then (result => {
                        if(result && result.httpCode && result.httpCode === 200){
                            this.getListThesis()
                            this.getOwnThesis()
                            this.$emit('arlert', 'arlert-success',config.title + 'thành công')
                        } else {
                            this.$emit('arlert', 'arlert-error',config.title + 'không thành công')
                        }
                    })
                    .catch(error => {
                        this.$emit('arlert', 'arlert-error',config.title + 'không thành công')
                    })
        },
        lecturerThesisBtn2(thesisId, thesisState){
            let config = {}
                switch (thesisState) {
                    case 'NEW': config = {endpoint: 'delete/', title: 'Xóa khóa luận ', methods: 'DELETE'}; break;
                    case 'WAITTING': config = {endpoint: 'reject/', title: 'Từ chối đăng ký khóa luận ', methods: "POST"}; break;
                    case 'ACTIVE': config = {endpoint: 'cancel/', title: 'Hoãn khóa luận ', methods: "POST"}; break;
                }
            let cf = confirm("Bạn có chắc chắn muốn " + config.title +"!");
            if(cf){
                request('/lecturer/thesis/'+config.endpoint+thesisId, config.methods)
                        .then (result => {
                            if(result && result.httpCode && result.httpCode === 200){
                                this.getListThesis()
                                this.getOwnThesis()
                                this.$emit('arlert', 'arlert-success',config.title + 'thành công')
                            } else {
                                this.$emit('arlert', 'arlert-warning',config.title + 'không thành công')
                            }
                        })
                        .catch(error => {
                            this.$emit('arlert', 'arlert-error',config.title + 'không thành công')
                        })
            }
        },
        colorStatus(state){
            switch (state) {
                case 'NEW': return "background-color: #30f558";
                case 'WAITTING': return "background-color: #f5c330";
                case 'ACTIVE': return "background-color: #30f558";
                case 'CANCELED': return "background-color: #f55d30";
            }
        },
        titleStatus(state){
            switch (state) {
                case 'NEW': return 'Mới'
                case 'WAITTING': return 'Đang chờ'
                case 'ACTIVE': return 'Hoạt động';
                case 'CANCELED': return 'Bị hoãn'
            }
        },
        signOut() {
            let cf = confirm("Bạn có chắc chắn muốn đăng xuất!");
            if(cf){
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('userRole');
                window.localStorage.removeItem('userId');
                this.$emit('logout');
            }
        },
        getUserInfo() {
            if(this.userRole === 'STU') {
                request('/student/info', 'GET')
                    .then(result => {
                        if(result && result.httpCode && result.httpCode === 200)
                            this.user_info = result.result
                    })
            } else if (this.userRole === 'LEC') {
                request('/lecturer/info', 'GET')
                    .then(result => {
                        if(result && result.httpCode && result.httpCode === 200)
                            this.user_info = result.result
                    })
            }
        },
        renderOwnThesis() {
            this.loading = true;
            if(this.userRole === 'STU') this.theses = this.studentThesisInfo
            else this.theses = this.lecturerThesisInfo
            setTimeout(() => {this.loading = false;  this.renderOwn = true;} , 300);
        },
        closeThesisModal() {
            this.isOpenThesisModal = false;
        },
        chooseThesis (thesis) {
            this.thesis = thesis;
            if(!thesis) this.thesis = this.defaultThesis
            this.isOpenThesisModal = true;
        }
    },
    created: function () {
        this.getListThesis()
        this.getOwnThesis()
        this.getUserInfo()
    },
    mounted: function() {
        // let listThesis = this
        // window.addEventListener("scroll", function (event) {
        //     var scroll = this.scrollY;
        //     if(scroll > 124)
        //         listThesis.anchor = true;
        //     else 
        //         listThesis.anchor = false;
        // });
    }
})