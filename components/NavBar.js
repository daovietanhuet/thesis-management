

class NavBar extends React.Component {
    render() {
        const {onLogout} = this.props
        return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Quản lý khóa luận</a>
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