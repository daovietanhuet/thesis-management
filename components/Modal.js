
class Modal extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render() {
      const {thesisCode, thesisSubject, lecturerName, studentName, branch, university, describle} = this.props;
        return (
            <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
          
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Khóa luận <input className="input-code" placeholder="Mã luận án" value={thesisCode}></input></h4>
                  <h4 className="modal-title"><input placeholder="Tên luận án" className="input-code" style={{width:"100%", padding:0}} value={thesisSubject}></input></h4>
                </div>
                <div className="modal-body">
                  <p><b className="model_ele">Giảng viên: {lecturerName}</b>{" "}<i className="fas fa-link"></i>{" "}<b className="model_ele"> Sinh viên: {studentName? studentName: 'Bị ẩn'}</b></p>
                  <p>
                    <b>Khoa: </b>
                    <input placeholder="Tên khoa" className="input-code" style={{width:"37%"}} value={branch}/>{" "}
                    <i className="fas fa-link"></i>{" "}
                    <b> Trường: </b>
                    <input placeholder="Tên trường" className="input-code" style={{width:"35%"}} value={university}/>{" "}
                  </p>
                  <p><b>Trạng thái: </b></p>
                  <div className="form-group green-border-focus">
                    <p><b>Mô tả:</b></p>
                    <textarea 
                      className="form-control" style={{resize:"none"}} rows="3" disabled={false} value={describle}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" >Lưu</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Thoát</button>
                </div>
              </div>
          
            </div>
          </div>
        );
    }
}

export default Modal;