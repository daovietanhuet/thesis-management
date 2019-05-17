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
            loading_logout: false
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
                        this.onLogout()
                    }
                })
                .catch(error => {
                    this.onLogout()
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
                <div className={this.state.loading_logout? 'login_loading' : 'disappear'}> <i className="fa fa-spinner fa-spin"></i> </div>
                <NavBar onLogout={this.onLogout}/>
                <ContentForm/>
            </div>
    )}

    onLogout = () => {
        let cf = confirm("Bạn có chắc chắn muốn đăng xuất");
        if(cf){
            this.setState({loading_logout: true})
            localStorage.removeItem('token')
            localStorage.removeItem('userRole')
            localStorage.removeItem('userId')
            Router.push(`/login`)
        }
    }
}

export default App;