

class NavBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        role: ''
      }
    }
    componentDidMount() {
      this.setState({ role: localStorage.getItem('userRole') === 'STU'? 'Sinh viên': localStorage.getItem('userRole') === 'LEC'? 'Giảng viên': 'Quản lý'});
    }
    render() {
        const {onLogout} = this.props
        return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <span className="navbar-brand">Quản lý khóa luận ({this.state.role})</span>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Việt Anh</a></li>
                <li><a href="#" onClick={onLogout}><span className="glyphicon glyphicon-log-in"></span> Đăng xuất</a></li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default NavBar;