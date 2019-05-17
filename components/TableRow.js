import moment from 'moment';
import request from '../assets/request';

const TableRow = props => {
  const {thesisSubject, state, updated_at, studentId, thesisCode, id} = props
  return (
    <tr data-status={state} className="fadein_ele">
      <td>
        <a href="javascript:;">
         
        </a>
      </td>
      <td>
          <a href="#">
            <img src="_next/static/images/thesis_icon.png" className="media-photo"  data-toggle="modal"  data-target="#myModal"/>
          </a>
      </td>
      <td>
        <h4 className="title">
          <a className="name">Lê Mai Phương</a> <i className="fas fa-link"></i> <a className="name">{studentId?'17020567':''}</a>
        </h4>
        <p className="summary"> {thesisSubject} ({thesisCode}) </p>
      </td>
      <td>
        <span className={getClassStatus(state)}>({getStatus(state)})</span>
      </td>
      <td>
        <span className="media-meta">{moment(updated_at).format("DD/MM/YYYY")}</span>
      </td>
      <td>
          <button 
            data-toggle={(state === 'NEW' && localStorage.getItem('userRole') === 'STU') || (state === 'WAITTING') ? '' : 'modal'} 
            data-target="#myModal"
            className={state === 'CANCELED' ? 'disappear': 'btn btn-default btn-action-pos'}
            onClick={e => doActivity(state, 'pos', id)}
            type="button">{getActivity(state, 'pos')}</button>
      </td>
      <td>
          <button 
            className={localStorage.getItem('userRole') === 'STU' || state === 'CANCELED' ? 'disappear': 'btn btn-default btn-action-neg'}
            onClick={e => doActivity(state, 'neg', id)}
            type="button">{getActivity(state, 'neg')}</button>
      </td>
    </tr>
  );
};

const getStatus = (status) => {
  switch(status) {
    case 'NEW': return 'Mới';
    case 'WAITTING': return 'Đang chờ';
    case 'CANCELED': return 'Bị hủy';
    case 'ACTIVE': return 'Hoạt động';
  }
}

const getClassStatus = (status) => {
  switch(status) {
    case 'NEW': return 'new';
    case 'WAITTING': return 'waitting';
    case 'CANCELED': return 'canceled';
    case 'ACTIVE': return 'active';
  }
}

const getActivity = (status, type) => {
  let userRole = localStorage.getItem('userRole');
  let isStudent = userRole === 'STU';
  switch(type) {
    case 'pos': 
      switch(status) {
        case 'NEW': return isStudent? 'Đăng ký': "Sửa";
        case 'WAITTING': return isStudent? 'Hủy': "Chấp nhận";
        case 'ACTIVE': return isStudent? 'Sửa': "Chấm điểm";
      }
    case 'neg':
      switch(status) {
        case 'NEW': return 'Xóa';
        case 'WAITTING': return 'Từ chối';
        case 'ACTIVE': return 'Hoãn';
      }
  }
}

const doActivity = (status, type, thesisId) => {
  let userRole = localStorage.getItem('userRole');
  let isStudent = userRole === 'STU';
  let config = null;
  switch(type) {
    case 'pos': 
      switch(status) {
        case 'NEW': config = isStudent? {endpoint: '/student/thesis/join/', methods: 'POST'}:null; break;
        case 'WAITTING': config = isStudent? {endpoint: '/student/thesis/exit/', methods: 'POST'}: {endpoint: '/lecturer/thesis/accept/',  methods: 'POST'}; break;
        default: config = null;
      }; break;
    case 'neg':
      switch(status) {
        case 'NEW': config = {endpoint: '/lecturer/thesis/delete/', methods: 'DELETE'}; break;
        case 'WAITTING':  config = {endpoint: '/lecturer/thesis/reject/', methods: "POST"}; break;
        case 'ACTIVE': config = {endpoint: '/lecturer/thesis/cancel/', methods: "POST"}; break;
        default: config = null;
      }; break;
  }
  let cf = false;
  if(!config) return 0;
  else cf = confirm("Bạn có chắc chắn thực hiện hành động này không. Hành động này có thể ảnh hưởng lớn đến kết quả sau này");
  if (cf)
    request(config.endpoint+thesisId, config.methods)
      .then (result => {
          if(result && result.httpCode && result.httpCode === 200){
            console.log("ok")
          }
      })
}

export default TableRow;



