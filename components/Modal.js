import request from '../assets/request';

class Modal extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        thesisCode: 'Mã khóa luận',
        thesisSubject: 'Chủ đề khóa luận',
        branch: 'Tên khoa',
        university: 'Tên Trường',
        describle: 'Mô tả',
        state: 'NEW',
        activityType: '',
        mark: null
      }
    }
    componentWillReceiveProps(nextProps) {
      if(nextProps) this.setState(nextProps);
      if(!nextProps.studentName) this.setState({studentName: null});
      if(!nextProps.lecturerName) this.setState({lecturerName: null})
    }
    render() {
      const {thesisCode, thesisSubject, lecturerName, studentName, branch, university, describle, state, modelType, thesisMark} = this.state;
        return (
            <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
          
              <div className="modal-content">
                <div className={!(modelType === 'create')?`modal-header modal-${this.getClassStatus(state)} modal-white`:'modal-header'} style={{borderTopLeftRadius: "6px", borderTopRightRadius: "6px"}}>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Khóa luận 
                    <input className="input-code" placeholder="Mã luận án" value={thesisCode} onChange={e => this.setState({thesisCode: e.target.value})} disabled={!(modelType === 'create')}></input>
                    Điểm {" "}
                    <input style={{width:"30%", backgroundColor: "transparent", border: "none", padding:"2px"}} value={thesisMark}  onChange={e => this.setState({mark: e.target.value})} disabled={!(state === 'ACTIVE')}></input>
                  </h4>
                  <h4 className="modal-title"><input placeholder="Tên luận án" className="input-code" style={{width:"100%", padding:0}} value={thesisSubject} onChange={e => this.setState({thesisSubject: e.target.value})} disabled={!(modelType === 'create')}></input></h4>
                </div>
                <div className="modal-body">
                  <p><b className="model_ele">Giảng viên: {lecturerName}</b>{" "}<i className="fas fa-link"></i>{" "}<b className="model_ele"> Sinh viên: {studentName? studentName: 'Bị ẩn'}</b></p>
                  <p>
                    <b>Khoa: </b>
                    <input placeholder="Tên khoa" className="input-code" style={{width:"37%"}} value={branch} onChange={e => this.setState({branch: e.target.value})} disabled={!(modelType === 'create')}/>{" "}
                    <i className="fas fa-link"></i>{" "}
                    <b> Trường: </b>
                    <input placeholder="Tên trường" className="input-code" style={{width:"35%"}} value={university} onChange={e => this.setState({university: e.target.value})} disabled={!(modelType === 'create')}/>{" "}
                  </p>
                  <p style={{width:"90%"}}><b>Trạng thái: </b><span className={this.getClassStatus(state)} style={{width: "90%", textAlign: "center", fontSize:"2rem", display:"inline-block"}}>({this.getStatus(state)})</span></p>
                  <div className="form-group green-border-focus">
                    <p><b>Mô tả:</b></p>
                    <textarea 
                      className="form-control" style={{resize:"none"}} rows="3" disabled={false}
                      value={describle}
                      onChange={e => this.setState({describle: e.target.value})}
                      disabled={(state === 'ACTIVE' || state === 'CANCELED' || state === 'COMPLETED')}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss='modal' onClick={e => this.doActivities()}>Lưu</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Thoát</button>
                </div>
              </div>
          
            </div>
          </div>
        );
    }
    getStatus = (status) => {
      switch(status) {
        case 'NEW': return 'Mới';
        case 'WAITTING': return 'Đang chờ';
        case 'CANCELED': return 'Bị hủy';
        case 'ACTIVE': return 'Hoạt động';
        case 'COMPLETED': return 'Hoàn thành';
      }
    }
    
    getClassStatus = (status) => {
      switch(status) {
        case 'NEW': return 'new';
        case 'WAITTING': return 'waitting';
        case 'CANCELED': return 'canceled';
        case 'ACTIVE': return 'active';
        case 'COMPLETED': return 'complete';
      }
    }

    doActivities = () => {
      let cf = confirm("Bạn có chắc chắn thực hiện hành động này không. Hành động này có thể ảnh hưởng lớn đến kết quả sau này");
      if (cf)
        if(this.state.modelType === 'create'){
          request('/lecturer/thesis/create', 'POST',' ',{"Content-type": "application/json"},{...this.state})
            .then (result => {
                if(result && result.httpCode && result.httpCode === 200){
                  console.log("ok")
                }
            })
        } else if (this.state.modelType === 'fix'){
          if(localStorage.getItem('userRole') === 'LEC' && this.state.state !== 'ACTIVE' && this.state.state != 'CANCELED')
            request(`/lecturer/thesis/describle/${this.state.id}`, 'PATCH',' ',{"Content-type": "application/json"},{...this.state})
              .then (result => {
                  if(result && result.httpCode && result.httpCode === 200){
                    console.log("ok")
                  }
              })
          if(localStorage.getItem('userRole') === 'LEC' && this.state.state === 'ACTIVE')
            request(`/lecturer/thesis/mark/${this.state.id}`, 'PATCH',' ',{"Content-type": "application/json"},{...this.state})
              .then (result => {
                  if(result && result.httpCode && result.httpCode === 200){
                    console.log("ok")
                  }
              })  
        }
    }
}

 

export default Modal;