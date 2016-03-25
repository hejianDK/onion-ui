import React from 'react';
import logo from '../doge.png';
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import { userProfile } from '../actions/userProfileActions';

const ACTIVE = {color: 'white', 'backgroundColor': 'grey'};

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeStyle: ACTIVE  };
    this.activeClick = this.activeClick.bind(this);
  }

  activeClick() {
    this.setState({ activeStyle: ACTIVE  });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userProfile())
  }
  render() {
    const {username} = this.props;
    const activeStyle = this.state.activeStyle;

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <IndexLink className='navbar-brand brand' to='/' onClick={ this.activeClick } >
              <img alt='Brand' src={logo} width='30' />
            </IndexLink>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li id='catalogNav'>
                <Link to='catalog' activeStyle={ activeStyle } onClick={ this.activeClick } >Browse Catalog</Link>
              </li>
              <li id='publishNav'>
                <Link to='publish' activeStyle={ activeStyle } onClick={ this.activeClick } >Publish</Link>
              </li>
              <li id='adminNav'>
                <Link to='admin' activeStyle={ activeStyle } onClick={ this.activeClick } >Admin</Link>
              </li>
            </ul>

            <ul className='nav navbar-nav navbar-right'>
              <li id='usernameNav' className='navbar-text'>Hello, {username}</li>
              <li id='helpNav'>
                <Link to='help' activeStyle={ activeStyle } onClick={ this.activeClick } >
                  <span className='glyphicon glyphicon-question-sign'/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state = {}) => {
  state.username = state.username || 'Guest';
  return state;
};

export default connect(mapStateToProps)(Nav);
