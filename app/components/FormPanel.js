import React from "react";

const FormPanel = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          { props.panelHeading }
          <button type='button' className='close' onClick={() => {props.dismiss()}}>
            <span aria-hidden='true'>&times;</span>
          </button>
        </h3>
      </div>
      <div className="panel-body">
        {props.children}
      </div>
    </div>
  );
};

export default FormPanel;
