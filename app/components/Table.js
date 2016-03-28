import React from "react";

const Table = (props) => {
  const {id, head, body, bodyKeys} = props;
  return (
    <table id={id} className='table table-striped'>
      <TableHead head={head}/>
      <TableBody body={body} bodyKeys={bodyKeys}/>
    </table>
  );
};

const TableHead = (props) => {
  return (
    <thead>
    <tr>
      {
        props.head.map((h, idx) => {
          return <th key={idx}>{ h }</th>
        })
      }
    </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const {body, bodyKeys} = props;
  const [ok, remove] = ['glyphicon glyphicon-ok', 'glyphicon glyphicon-remove'];
  return (
    <tbody>
    {
      body.map((b, idx) => {
        return (
          <tr key={ idx }>
            {
              bodyKeys.map((k, i) => {
                if (typeof b[k] === 'boolean') {
                  return <td key={i}>
                    <span className={ b[k] ? ok : remove }/>
                  </td>;
                }
                return <td key={i}>{b[k]}</td>;
              })
            }
          </tr>
        );
      })
    }
    </tbody>
  )
};

export default Table;
