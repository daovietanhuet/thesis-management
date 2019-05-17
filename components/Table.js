import TableRow from './TableRow';
import request from '../assets/request';

class Table extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      listThesis: [],
      ownThesisInfo: [],
      loading: true
    }
  }

  componentDidMount = async () => {
    const res = await request('/thesis/info')
    this.setState({listThesis: res.result, loading: false})
    this.getOwnThesis()
  }

  render = () => {
    const {onChange, filter, search, own} = this.props;
    return (
    <div className="table-container">
          <table className="table table-filter">
            <thead className="theadTitle">
              <tr>
                <td colSpan={3}>Khóa luận</td>
                <td>#</td>
                <td style={{textAlign: "left"}}>Ngày cập nhật</td>
                <td colSpan={2}>Hành động</td>
              </tr>
            </thead>
            <tbody>
              {!this.state.loading? this.renderListThesis(search, filter, own) : this.renderLoading()}
            </tbody>
          </table>
    </div>
  )}

  getOwnThesis() {
    request('/thesis/info', 'GET', 'section=self')
        .then (result => {
          if(!result.result || !result.result[0] || result.result === [] || !result.httpCode === 200) this.setState({ownThesisInfo: []})
          else this.setState({ownThesisInfo: result.result})
        })
  }

  renderListThesis = (search, filter, own) => {
    let check = false;
    let list = this.state.listThesis;
    if(own) list = this.state.ownThesisInfo;
    let result = list.map((ele, index) => {
        if( (ele.state === filter || (filter === 'ALL')) && ((ele.thesisSubject + `(${ele.thesisCode})`).includes(search)) )
          return <TableRow {...ele} key={index}/>
      })
    if(localStorage.getItem('userRole') === 'LEC' && own) result.push(
      <tr key={result.length}>
        <td colSpan="7" style={{verticalAlign: "center", textAlign: "center", fontSize: "2rem", color: "#ddd"}} className="fadein_ele">
          <a><i className="fas fa-plus"></i> Thêm khóa luận </a>
        </td>
      </tr>
    )
    for( let i = 0; i < result.length; i++) if(result[i]) check = true;
    if(!check) return (
      <tr>
        <td colSpan="7" style={{verticalAlign: "center", textAlign: "center", fontSize: "3rem", color: "#ddd"}} className="fadein_ele">
          <i className="fas fa-database"></i> NO DATA
        </td>
      </tr>
    )
    else return result
  }

  renderLoading = () => {
    return (
      <tr>
        <td colSpan="7" style={{verticalAlign: "center", textAlign: "center"}} className="fadein_ele">
          <i className="fa fa-spinner fa-spin"></i> Loading...
        </td>
      </tr>
    )
  }
}

export default Table