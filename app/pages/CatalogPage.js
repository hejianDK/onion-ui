import React from 'react';
import catalog from '../mockdata/catalog';
import Table from '../components/Table';

export const catalogHead = ['ServiceName', 'Version', 'Publisher', 'Rds Enabled'];
export const catalogBodyKeys = ['serviceName', 'version', 'publisher', 'rdsEnabled'];


export default class CatalogPage extends React.Component {
  render() {
    return (
      <div className='container-fluid table-responsive'>
        <h3>Catalogs</h3>
        <Table id="catalogTable" head={catalogHead} bodyKeys={catalogBodyKeys} body={catalog} />
      </div>
    );
  }
}
