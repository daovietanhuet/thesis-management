import Table from '../components/Table';
import FilterTable from '../components/FilterTable';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

class ContentForm extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      own: false,
      filter: "ALL",
      search: ""
    }
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <section className="content">
            <div className="panel panel-default">
              <div className="panel-body">
                  <FilterTable {...this.state} onChange={this.onSetState}/>
                  <Table {...this.state}/>
                </div>
            </div>
            <Footer/>
          </section>
          <Modal/>
        </div>
      </div>
    )
  }

  onSetState = (changedState) => {
    this.setState(changedState)
  }
}

export default ContentForm