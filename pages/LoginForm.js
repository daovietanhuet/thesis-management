import request from '../assets/request';
import Footer from '../components/Footer';

class LoginForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            role: "STU",
            loading: false
        }
    }
    render() {
        return (
            <div className="login_form">
            <div className={this.state.loading? 'login_loading' : 'disappear'}> <i className="fa fa-spinner fa-spin"></i> </div>
            <div className="form-signin">       
              <h2 className="form-signin-heading">Vui lòng đăng nhập</h2>
              <input type="text" className="form-control input_user" name="username" placeholder="Tên đăng nhập" required="" autoFocus="" onChange={e => this.setState({username: e.target.value})}/>
              <input type="password" className="form-control input_pass" name="password" placeholder="Mật khẩu" required="" onChange={e => this.setState({password: e.target.value})}/>   
              <select className="select form-control" name="role" defaultValue onChange={e => this.setState({role: e.target.value})}>
                <option value="STU">Sinh viên</option>
                <option value="LEC">Gỉang viên</option>
                <option value="MAN">Quản lý</option>
              </select>   
              <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={e => this.onSubmit()}>Đăng nhập</button> 
              <div  style={{paddingTop: "10px"}}></div>  
              <Footer/>
            </div>
          </div>
        );
    }

    onSubmit = () => {
        this.setState({loading: true})
        request('/auth/login', 'POST', '', {"Content-type": "application/json"}, {username: this.state.username, password: this.state.password, userRole: this.state.role})
            .then(result => {
                if(result && result.httpCode && result.httpCode === 200){
                    localStorage.setItem('token', result.result.token)
                    localStorage.setItem('userRole',  this.state.role);
                    request('/auth/verify', 'GET')
                        .then(result => {
                            if(result && result.httpCode && result.httpCode === 200){
                                localStorage.setItem('userId', result.result.userId);
                                this.props.onSuccess()
                            }
                        })
                }
            })
    }
}

export default LoginForm;