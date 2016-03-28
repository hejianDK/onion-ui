import React from 'react';
import dogeGif from '../giphy.gif';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="page-header">
          <h1>Oops... This is not the web page you are looking for.</h1>
        </div>
        <img src={dogeGif} width="500" height="500" />
      </div>
    );
  }
}
