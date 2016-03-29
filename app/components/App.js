import React from 'react';
import {connect} from 'react-redux';
import Toaster from './Toaster';
import Nav from './Nav';
import '../main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dismiss: true};
  }
  componentWillReceiveProps(props) {
    const {error} = props.publishers;
    this.setState({dismiss: error === undefined});
  }

  dismissToaster() {
    this.setState({dismiss: true});
  }
  render() {
    const {dispatch} = this.props;
    const {error} = this.props.publishers;
    return (
      <div>
        {this.state.dismiss
          ? null
          : <Toaster dismiss={this.dismissToaster.bind(this)} error={error} dispatch={dispatch} />}
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(App);