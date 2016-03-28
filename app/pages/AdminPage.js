import React from "react";
import Table from "../components/Table";
import {connect} from "react-redux";
import {getPublishers} from "../actions/publisherActions";
import {SyncMode} from "../reducers/SyncObject";
import PublisherForm from "../components/PublisherForm";

export const adminHead = ['Publisher Name', 'Contact Name', 'Prefix',
  'Contact DL', 'Other email', 'Contact #'];
export const adminBodyKeys = ['displayName', 'contactName', 'prefix',
  'distributionEmail', 'contactEmail', 'contactPhone'];

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pubFormDismiss: true};
  }

  showPubForm() {
    this.setState({pubFormDismiss: false});
  }

  dismissPubForm() {
    this.setState({pubFormDismiss: true});
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getPublishers());
  }

  render() {
    const {publishers} = this.props;
    return (
      <div className='container-fluid '>
        <div className='table-responsive'>
          <h3>
            Publishers
            <small className='btn-group'>
              <button className='btn btn-default btn-xs' onClick={this.showPubForm.bind(this)}>
                Add
              </button>
              {
                publishers.syncMode === SyncMode.WRITING
                  ? 'adding...' : null
              }
            </small>
          </h3>
          { publishers.syncMode === SyncMode.READING ? <h4>Loading...</h4> : null }
          {
            publishers.data.length === 0
              ? null
              : <Table id='userTable' head={adminHead}
                       bodyKeys={adminBodyKeys} body={publishers.data}/>
          }
        </div>
        {
          this.state.pubFormDismiss ? null :
            <PublisherForm panelHeading='Publisher Form' dismiss={this.dismissPubForm.bind(this)}/>
        }
        <div className='table-responsive'>
          <h3>
            Users
            <small className='btn-group'>
              <button className='btn btn-default btn-xs'>Add</button>
            </small>
          </h3>
          <Table id='userTable' head={adminHead} bodyKeys={adminBodyKeys} body={publishers.data}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AdminPage);
