import React from 'react';

export default class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  retryHandler(e) {
    e.preventDefault();
    const {action, method} = this.props.error;
    this.props.dispatch(method(action.data));
  }

  render() {
    const {json} = this.props.error;
    return (
      <div className='alert alert-danger toaster' role='alert' >
        <button type='button' className='close' onClick={() => {this.props.dismiss(json)}}>
          <span aria-hidden='true'>&times;</span>
        </button>
        <span>{json.message}</span>
        <a className="alert-link pull-right" onClick={this.retryHandler.bind(this) }>Retry</a>
      </div>
    );
  }
}

import {connect} from 'react-redux';
