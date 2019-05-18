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

  componentDidMount = () => {
    this.getAllThesis()
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

  getAllThesis = () => {
    request('/thesis/info')
      .then(async result => {
        if(!result.result || !result.result[0] || result.result === [] || !result.httpCode === 200) this.setState({listThesis: []})
        else {
          this.setState({listThesis: result.result, loading: false})
          let list = result.result;
          for(let i = 0; i < list.length; i++){
            let lecturer = await request('/lecturer/info', 'GET', `section=all&id=${list[i].lecturerId}`);
            list[i].lecturerName = lecturer.result ? lecturer.result[0].fullName: '';
          }
          this.setState({listThesis: list, loading: false})
        }
      })
  }

  getOwnThesis = () => {
    request('/thesis/info', 'GET', 'section=self')
      .then (async result => {
        if(!result.result || !result.result[0] || result.result === [] || !result.httpCode === 200) this.setState({ownThesisInfo: []})
        else {
          this.setState({ownThesisInfo: result.result})
          let list = result.result;
          for(let i = 0; i < list.length; i++){
            let lecturer = await request('/lecturer/info', 'GET', `section=all&id=${list[i].lecturerId}`);
            let student = (localStorage.getItem('userRole') === 'LEC')? await request('/student/info', 'GET', `id=${list[i].studentId}`): null; 
            list[i].lecturerName = lecturer.result ? lecturer.result[0].fullName: '';
            list[i].studentName = student? student.result? student.result[0].fullName : '' : '';
          }
          this.setState({ownThesisInfo: list})
        }
      })
  }

  renderListThesis = (search, filter, own) => {
    let check = false;
    let list = this.state.listThesis;
    if(own) list = this.state.ownThesisInfo;
    let result = list.map((ele, index) => {
        if( (ele.state === filter || (filter === 'ALL')) && ((ele.thesisSubject + `(${ele.thesisCode})` + ele.lecturerName).includes(search)) )
          return <TableRow {...ele} own={own} key={index}/>
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