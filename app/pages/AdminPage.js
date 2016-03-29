import React from "react";
import Table from "../components/Table";
import {connect} from "react-redux";
import {getPublishers} from "../actions/publisherActions";
import {SyncMode} from "../reducers/SyncObject";
import PublisherForm from "../components/PublisherForm";
import UserForm from "../components/UserForm";
import FormPanel from "../components/FormPanel";
import {getUsers} from "../actions/userActions";

export const pubHead = ['Publisher Name', 'Contact Name', 'Prefix',
  'Contact DL', 'Other email', 'Contact #'];
export const pubBodyKeys = ['displayName', 'contactName', 'prefix',
  'distributionEmail', 'contactEmail', 'contactPhone'];
export const userHead = ['Username', 'Active'];
export const userBodyKeys = ['userName', 'isActive'];

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pubFormDismiss: true, userFormDismiss: true};
  }

  showPubForm() {
    this.setState({pubFormDismiss: false});
  }

  dismissPubForm() {
    this.setState({pubFormDismiss: true});
  }

  showUserForm() {
    this.setState({userFormDismiss: false});
  }

  dismissUserForm() {
    this.setState({userFormDismiss: true});
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getPublishers());
    dispatch(getUsers());
  }

  render() {
    const {publishers, users} = this.props;
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
              : <Table id='pubTable' head={pubHead}
                       bodyKeys={pubBodyKeys} body={publishers.data}/>
          }
        </div>
        {
          this.state.pubFormDismiss ? null :
            <FormPanel dismiss={this.dismissPubForm.bind(this)}  panelHeading='Publisher Form'>
              <PublisherForm dismiss={this.dismissUserForm.bind(this)} />
            </FormPanel>
        }
        <div className='table-responsive'>
          <h3>
            Users
            <small className='btn-group'>
              <button className='btn btn-default btn-xs' onClick={this.showUserForm.bind(this)}>
                Add
              </button>
              {
                users.syncMode === SyncMode.WRITING
                  ? 'adding...' : null
              }
            </small>
          </h3>
          { users.syncMode === SyncMode.READING ? <h4>Loading...</h4> : null }
          {
            users.data.length === 0
              ? null
              : <Table id='userTable' head={userHead}
                       bodyKeys={userBodyKeys} body={users.data}/>
          }
        </div>
        {
          this.state.userFormDismiss ? null :
          <FormPanel dismiss={this.dismissUserForm.bind(this)}  panelHeading='User Form'>
            <UserForm dismiss={this.dismissUserForm.bind(this)} />
          </FormPanel>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(AdminPage);
