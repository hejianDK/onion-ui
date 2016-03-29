import React from 'react';
import {connect} from 'react-redux';
import {addUser} from "../actions/userActions";

class PublisherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: {}};
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
  }

  handleValueChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    let user = this.state.user;
    user[id] = value;
    this.setState({user});
  }
  handleCheckedChange(e) {
    const id = e.target.id;
    const checked = e.target.checked;
    let user = this.state.user;
    user[id] = checked ? 1 : 0;
    this.setState({user});
  }

  handleSubmitClick() {
    const {dispatch, dismiss} = this.props;
    dispatch(addUser(this.state.user));
    dismiss();
  }

  render() {
    const user = this.state.user;
    return (
      <form>
        <div className='form-group'>
          <label htmlFor='userName'>Display Name</label>
          <input type='text' className='form-control' onChange={this.handleValueChange}
                 id='userName' placeholder='Username' value={user.userName} />
        </div>
        <div className='form-group'>
          <label htmlFor='isActive'>Active</label>
          <input type='checkbox' className='form-control' onChange={this.handleCheckedChange}
                 id='isActive' checked={user.isActive} />
        </div>
        <button type='button' className='btn btn-default'
                onClick={this.handleSubmitClick.bind(this)} >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PublisherForm);
