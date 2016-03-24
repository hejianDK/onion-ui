import React from 'react';
import logo from '../doge.png';
import {IndexLink, Link} from 'react-router';

const ACTIVE = {color: 'gold', 'backgroundColor': 'silver'};

export default class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <IndexLink className='navbar-brand' to='/' >
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
              <li id='userNameNav' className='navbar-text'>Hello, Onion</li>
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
