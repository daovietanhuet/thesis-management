const app = new Vue({
    el: '#root',
    data: {
        is_login: true,
        icon: "",
        arlert_type: "arlert",
        arlert_message: "",
        arlert_title: "",
        user_info: {}
    },
    components: {
        list_thesis: list_thesis,
        list_announcement: list_announcement,
        login_form: login_form
    },
    methods: {
        getToken: function() {
            // window.localStorage.setItem('token', 'ababbaba');
            // window.localStorage.setItem('userRole',  'sut');
            // window.localStorage.setItem('userId', 1234);
            let token = window.localStorage.getItem('token');
            let userId = window.localStorage.getItem('userId');
            let userRole = window.localStorage.getItem('userRole');
            if(token && userId && userRole)
                request('/auth/verify', 'GET')
                    .then(result => {
                        if(token && userId && userRole && result && result.httpCode && result.httpCode === 200) {
                            this.is_login = true;
                            
                        }
                        else this.is_login = false
                    })
                    .catch(error => {
                        this.is_login = false
                    })
            else this.is_login = false
        },
        submitted: function(value) {
            this.is_login = value
        },
        getArlert: function(type, message) {
            this.arlert_type = type;
            this.arlert_message = message;
            switch (this.arlert_type) {
                case 'arlert-success' : this.icon = "fas fa-check"; this.arlert_title = "Thành công! "; break;
                case 'arlert-info': this.icon = "fas fa-question-circle"; this.arlert_title = "Thông tin: "; break;
                case 'arlert-warning': this.icon = "fas fa-exclamation-triangle"; this.arlert_title = "Cảnh báo! "; break;
                case 'arlert-error': this.icon = "fas fa-ban"; this.arlert_title = "Lỗi! "; break;
            }
            this.arlert_type = 'arlert ' + this.arlert_type + ' appear';
            this.is_arlert = true;
            setTimeout(() => {this.arlert_type = "arlert"}, 1000)
        }
    },
    created: function () {
        this.getToken()
    }
})