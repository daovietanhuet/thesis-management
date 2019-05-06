const login_form = Vue.component('login_form', {
    data() {
        return {
            username: "",
            password: "",
            role: "STU",
            loading: false
        }
    },
    methods: {
        login: function() {
            this.loading = true;
            request('/auth/login', 'POST', '', {"Content-type": "application/json"}, {username: this.username, password: this.password, userRole: this.role})
                .then(result => {
                    if(result && result.httpCode && result.httpCode === 200){
                        window.localStorage.setItem('token', result.result.token);
                        window.localStorage.setItem('userRole',  this.role);
                        request('/auth/verify', 'GET')
                            .then(result => {
                                window.localStorage.setItem('userId', result.result.userId);
                                this.loading = false;
                                this.$emit('submit', true);
                                this.$emit('arlert', 'arlert-success','Đăng nhập thành công')
                            })
                            .catch(error => {
                                this.$emit('submit', false);
                                this.$emit('arlert', 'arlert-error','Tên đăng nhập hoặc mật khẩu sai')
                                this.loading = false;
                            })
                    } else {
                        this.$emit('submit', false);
                        this.$emit('arlert', 'arlert-error', 'Tên đăng nhập hoặc mật khẩu sai')
                        this.loading = false;
                    }
                })
                .catch(error => {
                    this.$emit('submit', false);
                    this.$emit('arlert', 'arlert-error', 'Tên đăng nhập hoặc mật khẩu sai')
                    this.loading = false;
                })
        },
    },
    mounted() {
        let login = this
        window.addEventListener('keyup', function(event) {
          if (event.keyCode == 13) {
            login.login()
          }
        });
    }
})