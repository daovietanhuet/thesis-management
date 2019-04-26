const app = new Vue({
    el: '#root',
    data: {
        is_login: true,
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
        }
    },
    created: function () {
        this.getToken()
    }
})