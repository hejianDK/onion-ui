import React from 'react';
import logo from '../../static/logo.png';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';

const ACTIVE = { color: 'white', backgroundColor: '#666699' };

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeStyle: ACTIVE };
    this.activeClick = this.activeClick.bind(this);
  }

  activeClick() {
    this.setState({ activeStyle: ACTIVE });
  }

  render() {
    const activeStyle = this.state.activeStyle;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button" className="navbar-toggle collapsed"
              data-toggle="collapse" data-target="#onion-nav" aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <IndexLink className="navbar-brand brand" to="/" onClick={ this.activeClick } >
              <img alt="Brand" src={logo} width="100" />
            </IndexLink>
          </div>
          <div className="collapse navbar-collapse" id="onion-nav">
            <ul className="nav navbar-nav">
              <li>
                <Link to="todo" activeStyle={ activeStyle } onClick={ this.activeClick } >
                  My Todo App
                </Link>
              </li>
              <li>
                <Link to="slot1" activeStyle={ activeStyle } onClick={ this.activeClick } >
                  Slot 1
                </Link>
              </li>
              <li>
                <Link to="slot2" activeStyle={ activeStyle } onClick={ this.activeClick } >
                  Slot 2
                </Link>
              </li>
              <li className="dropdown">
                <a
                  href="#" className="dropdown-toggle"
                  data-toggle="dropdown" role="button"
                  aria-haspopup="true" aria-expanded="false"
                >
                  Dropdown <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Extra slot 1</a></li>
                  <li><a href="#">Extra slot 2</a></li>
                  <li><a href="#">Extra slot 3</a></li>
                  <li role="separator" className="divider" />
                  <li><a href="#">Onion</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li id="usernameNav" className="navbar-text">Hello, Onion!</li>
              <li id="helpNav">
                <Link to="help" activeStyle={ activeStyle } onClick={ this.activeClick } >
                  <span className="glyphicon glyphicon-question-sign" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Nav);
