import React from 'react';
import logo from '../doge.png';
import {IndexLink, Link} from 'react-router';
import { connect } from 'react-redux';
import { userProfile } from '../actions/userProfileActions';

const ACTIVE = {color: 'gold', 'backgroundColor': 'silver'};

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userProfile())
  }
  render() {
    const {username} = this.props;
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <IndexLink className='navbar-brand brand' to='/' >
              <img alt='Brand' src={logo} width='30' />
            </IndexLink>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li id='catalogNav'><Link to='catalog' activeStyle={ ACTIVE }>Browse Catalog</Link></li>
              <li id='publishNav'><Link to='publish' activeStyle={ ACTIVE }>Publish</Link></li>
              <li id='adminNav'><Link to='admin' activeStyle={ ACTIVE }>Admin</Link></li>
            </ul>

            <ul className='nav navbar-nav navbar-right'>
              <li id='usernameNav' className='navbar-text'>Hello, {username}</li>
              <li id='helpNav'>
                <Link to='help' activeStyle={ ACTIVE }>
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
