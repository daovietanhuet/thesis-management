import TableRow from './TableRow';
import request from '../assets/request';

class Table extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      listThesis: [],
      ownThesisInfo: [],
      lecturer: [],
      student: [],
      loading: true
    }
  }

  componentDidMount = async () => {
    await this.getAllInfo();
    this.getAllThesis()
    this.getOwnThesis()
  }

  render = () => {
    const {filter, search, own} = this.props;
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

  getAllInfo = async() => {
    let lecturer = await request('/lecturer/info', 'GET', `section=all`);
    lecturer = lecturer? lecturer.result : [];
    let student = (localStorage.getItem('userRole') !== 'STU')? await request('/student/info', 'GET') : null;
    student = student? student.result : [];
    await this.setState({student: student, lecturer: lecturer});
  }

  getAllThesis = () => {
    request('/thesis/info')
      .then(async result => {
        if(!result.result || !result.result[0] || result.result === [] || !result.httpCode === 200) this.setState({listThesis: []})
        else {
          this.setState({listThesis: result.result, loading: false})
          let list = result.result;
          let {lecturer, student} = this.state;
          for(let i = 0; i < list.length; i++){
            for(let j = 0; j < lecturer.length; j++) 
              if(list[i].lecturerId === lecturer[j].id) list[i].lecturerName = lecturer[j].fullName;
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
          let {lecturer, student} = this.state;
          for(let i = 0; i < list.length; i++){
            for(let j = 0; j < lecturer.length; j++) 
              if(list[i].lecturerId === lecturer[j].id) list[i].lecturerName = lecturer[j].fullName;
            if (localStorage.getItem('userRole') !== 'STU')
              for(let k = 0; k < student.length; k++) 
                if(list[i].studentId === student[k].id) list[i].studentName = student[k].fullName;
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
        if( (ele.state === filter || (filter === 'ALL')) && ((ele.thesisSubject + `(${ele.thesisCode})` + ele.lecturerName).toLowerCase().includes(search.toLowerCase())) )
          return <TableRow ele={ele} key={index} {...this.props}/>
      })
    if(localStorage.getItem('userRole') === 'LEC' && own) result.push(
      <tr key={result.length}>
        <td colSpan="7" style={{verticalAlign: "center", textAlign: "center", fontSize: "2rem", color: "#ddd"}} className="fadein_ele">
          <a
            data-toggle='modal'
            data-target="#myModal"
          ><i className="fas fa-plus"></i> Thêm khóa luận </a>
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