import React from 'react';
import FormPanel from '../components/FormPanel';
import {connect} from 'react-redux';
import {addPublisher} from "../actions/publisherActions";

class PublisherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pub: {}};
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    let pub = this.state.pub;
    pub[id] = value;
    this.setState({pub});
  }

  handleSubmitClick() {
    const {dispatch, dismiss} = this.props;
    dispatch(addPublisher(this.state.pub));
    dismiss();
  }

  render() {
    const pub = this.state.pub;
    return (
      <FormPanel panelHeading={this.props.panelHeading} dismiss={this.props.dismiss} >
        <form>
          <div className='form-group'>
            <label htmlFor='displayName'>Display Name</label>
            <input type='text' className='form-control' onChange={this.handleValueChange}
                   id='displayName' placeholder='Display Name' value={pub.displayName} />
          </div>
          <div className='form-group'>
            <label htmlFor='contactName'>Contact Name</label>
            <input type='text' className='form-control' onChange={this.handleValueChange}
                   id='contactName' placeholder='Contact Name' value={pub.contactName} />
          </div>
          <div className='form-group'>
            <label htmlFor='contactEmail'>Contact Email</label>
            <input type='email' className='form-control' onChange={this.handleValueChange}
                   id='contactEmail' placeholder='Contact Email' value={pub.contactEmail} />
          </div>
          <div className='form-group'>
            <label htmlFor='distributionEmail'>Distribution Email</label>
            <input type='email' className='form-control' onChange={this.handleValueChange}
                   id='distributionEmail' placeholder='Distribution Email' value={pub.distributionEmail} />
          </div>
          <div className='form-group'>
            <label htmlFor='contactPhone'>Contact Phone</label>
            <input type='text' className='form-control' onChange={this.handleValueChange}
                   id='contactPhone' placeholder='Contact Phone' value={pub.contactPhone} />
          </div>
          <div className='form-group'>
            <label htmlFor='prefix'>Prefix</label>
            <input type='text' className='form-control' onChange={this.handleValueChange}
                   id='prefix' placeholder='Prefix' value={pub.prefix} />
          </div>
          <button type='button' className='btn btn-default'
                  onClick={this.handleSubmitClick.bind(this)} >
            Submit
          </button>
        </form>
      </FormPanel>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(PublisherForm);