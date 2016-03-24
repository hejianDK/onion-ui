import React from 'react';
import faq from '../mockdata/faq';

export default class HelpPage extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <h2>Frequently Asked Questions</h2>
          {
            faq.map((f, idx) => {
              return <FaqItem f={ f } idx={ idx } key={ idx } />
            })
          }
        </div>
      </div>
    );
  }
}

const FaqItem = (props) => {
  const {f, idx} = props;
  return (
    <div className="panel panel-default">
      <div className="panel-heading" >
        <h4 className="panel-title">
          {f.question}
        </h4>
      </div>
      <div className="panel-body">
        {f.answer}
      </div>
    </div>
  );
};
