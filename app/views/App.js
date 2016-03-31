import React from 'react';
import { connect } from 'react-redux';
import Nav from './components/Nav';
import '../static/main.css';

function App(props) {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        { props.children }
      </div>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
