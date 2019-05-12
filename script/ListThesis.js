const list_thesis = Vue.component('list_thesis', {
    data() {
        return {
            userRole: window.localStorage.getItem('userRole'),
            loading: true,
            theses: [],
            studentThesisInfo: null,
            lecturerThesisInfo: [],
            anchor: false
        }
    },
    methods: {
        getListThesis() {
            request('/thesis/info', 'GET')
                .then (result => {
                    this.theses = result.result
                    this.loading = false;
                })
        },
        getOwnThesis() {
            request('/thesis/info', 'GET', 'section=self')
                .then (result => {
                    if(this.userRole === 'STU'){
                        if(!result.result || !result.result[0] || result.result === []) this.studentThesisInfo = null
                        else this.studentThesisInfo = result.result[0]
                    } else if(this.userRole === 'LEC')
                        this.lecturerThesisInfo = result.result
                        console.log(this.lecturerThesisInfo)
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
        }
    },
    created: function () {
        this.getListThesis()
        this.getOwnThesis()
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