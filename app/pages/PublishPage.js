import React from 'react';
import {catalogHead, catalogBodyKeys} from './CatalogPage';
import Table from '../components/Table';
import catalog from '../mockdata/catalog';
import connections from '../mockdata/connection';

export default class PublishPage extends React.Component {
  render() {
    const filteredCatalog = catalog.filter((c) => {
      return c.version === 1;
    });
    return (
      <div className="container-fluid ">
        <div className='table-responsive'>
          <h3>
            Connections
            <small className="btn-group">
              <button className="btn btn-default btn-xs">Add</button>
            </small>
          </h3>
          <Table id="connectionTable" head={connectionHead} bodyKeys={connectionBodyKeys} body={connections} />
        </div>
        <div className='table-responsive'>
          <h3>
            Catalogs
            <small className="btn-group">
              <button className="btn btn-default btn-xs">Add</button>
            </small>
          </h3>
          <Table id='filteredCatalogTable' head={catalogHead} bodyKeys={catalogBodyKeys} body={filteredCatalog} />
        </div>
      </div>
    );
  }
}

export const connectionHead = ['Connection Name', 'Dialect', 'DriverClass', 'User Name'];
export const connectionBodyKeys = ['name', 'dialect', 'driverClass', 'username'];

