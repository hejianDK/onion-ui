import React from 'react';

function Intro(props) {
  return (
    <div className="col-sm-3">
      <div className="page-header">
        <h4>Introduction</h4>
      </div>
      { props.children }
    </div>
  );
}

Intro.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Intro;
