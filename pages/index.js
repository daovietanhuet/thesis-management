import Head from 'next/head';
import Router from 'next/router'
import ContentForm from './ContentForm';
import NavBar from '../components/NavBar';
import request from '../assets/request';
import '../assets/styles.css'

class App extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            arlert: false,
            arlertType: 'success',
            arlertName: 'Thành công',
            arlertMes: ''
        }
    }
    componentDidMount () {
        let token = localStorage.getItem('token')
        let role = localStorage.getItem('userRole')
        let id = localStorage.getItem('userId')
        if(!token || !role || !id) {
            Router.push("/login")
        } else {
            request('/auth/verify', 'GET')
                .then(result => {
                    if(!(result && result.httpCode && result.httpCode === 200)){
                        this.setState({loading: true})
                        localStorage.removeItem('token')
                        localStorage.removeItem('userRole')
                        localStorage.removeItem('userId')
                        Router.push(`/login`)
                    }
                })
                .catch(error => {
                    this.setState({loading: true})
                    localStorage.removeItem('token')
                    localStorage.removeItem('userRole')
                    localStorage.removeItem('userId')
                    Router.push(`/login`)
                })
        }
    }

    render() {
        return (
            <div>
                <div className="page"></div>
                <Head>
                    <title>Thesis management</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
                </Head>
                <div className={this.state.loading? 'login_loading' : 'disappear'}> <i className="fa fa-spinner fa-spin"></i> </div>
                <NavBar onLogout={this.onLogout}/>
                <ContentForm onArlert={this.onArlert}/>
                <div className={`alert alert-${this.state.arlertType} alert-dismissible ${this.state.arlert? 'fadein_ele' : 'fade'}`} style={{position:'fixed', bottom: 0, margin: 0, width: "100%"}}>
                    <strong>{this.state.arlertName}!</strong> {this.state.arlertMes}
                    <button type="button" className="close" onClick={e => this.onArlert({arlert: false})}>&times;</button>
                </div>
            </div>
    )}

    onLogout = () => {
        let cf = confirm("Bạn có chắc chắn muốn đăng xuất");
        if(cf){
            this.setState({loading: true})
            localStorage.removeItem('token')
            localStorage.removeItem('userRole')
            localStorage.removeItem('userId')
            Router.push(`/login`)
        }
    }

    onArlert = (state) => {
        this.setState(state)
    }
}

export default App;