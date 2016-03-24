import React from 'react';
import publishers from '../mockdata/publisher';
import users from '../mockdata/publisher';
import Table from '../components/Table';

export const adminHead = ['Name', 'Contact DL', 'Contact #'];
export const adminBodyKeys = ['name', 'email', 'phone'];

export default class AdminPage extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className='table-responsive'>
          <h3>
            Publishers
            <small className="btn-group">
              <button className="btn btn-default btn-xs">Add</button>
            </small>
          </h3>
          <Table id='publisherTable' head={adminHead} bodyKeys={adminBodyKeys} body={publishers} />
        </div>
        <div className='table-responsive'>
          <h3>
            Users
            <small className="btn-group">
              <button className="btn btn-default btn-xs">Add</button>
            </small>
          </h3>
          <Table id='userTable' head={adminHead} bodyKeys={adminBodyKeys} body={users} />
        </div>
      </div>
    );
  }
}
