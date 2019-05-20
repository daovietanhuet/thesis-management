const FilterTable = (props) => {
    const {onChange, own} = props;
    return (
        <div>
            <input className="form-control" type="text" placeholder="Tìm kiếm theo tên, mã, giảng viên" aria-label="Search" onChange={e => onChange({search: e.target.value.trim()})}/>
            <div className="btn-group">
                <button type="button" className={own ? "btn btn-primary btn-filter" : "btn btn-default btn-filter"}  onClick={e => onChange({own: !own, filter: 'ALL'})}>Của tôi</button>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-default btn-filter"  onClick={e => onChange({filter: 'ALL'})}>Tât cả</button>
                <button type="button" className="btn btn-success btn-filter"  onClick={e => onChange({filter: 'NEW'})}>Mới</button>
                <button type="button" className="btn btn-warning btn-filter"  onClick={e => onChange({filter: 'WAITTING'})}>Đang chờ</button>
                <button type="button" className="btn btn-danger btn-filter"   onClick={e => onChange({filter: 'CANCELED'})}>Hủy</button>
                <button type="button" className="btn btn-primary btn-filter"  onClick={e => onChange({filter: 'ACTIVE'})}>Hoạt động</button>
                <button type="button" className="btn btn-primary btn-filter" style={{backgroundColor: "#cb00cc", borderColor: "#cb00cc"}} onClick={e => onChange({filter: 'COMPLETED'})}>Hoàn thành</button>
            </div>
        </div>
    )
}

export default FilterTable