import Head from 'next/head';
import Router from 'next/router'
import LoginForm from './LoginForm';
import '../assets/login_styles.css'


class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        let role = localStorage.getItem('userRole')
        let id = localStorage.getItem('userId')
        if(token && role && id) {
            Router.push("/")
        }
    }

    render () {
        return (
        <div>
            <div className="page"></div>
            <Head>
                <title>Đăng nhập hệ thống</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
            </Head>
            <LoginForm onSuccess={this.onSuccess}/>
        </div>
    )};

    onSuccess = () => {
        Router.push(`/`)
    }
};

export default login;