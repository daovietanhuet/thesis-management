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
      search: "", 
      modelThesis: null,
      modelType: 'fix'
    }
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <section className="content">
            <div className="panel panel-default">
              <div className="panel-body">
                  <FilterTable {...this.state} onChange={this.onSetState} {...this.props}/>
                  <Table {...this.state} onChange={this.onSetState} {...this.props}/>
                </div>
            </div>
            <Footer/>
          </section>
          <Modal {...this.state.modelThesis} modelType={this.state.modelType} own={this.state.own} {...this.props}/>
        </div>
      </div>
    )
  }

  onSetState = (changedState) => {
    this.setState(changedState)
  }
}

export default ContentForm