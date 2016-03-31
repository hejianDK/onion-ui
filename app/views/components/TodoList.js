import React from 'react';
import { Status } from '../../reducers/StateHolder';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { data, error, status } = props.todo;
  const undoneTodo = data.filter((t) => !t.done);
  let label;
  if (undoneTodo.length > 3) {
    label = 'label label-danger';
  } else if (undoneTodo.length > 0) {
    label = 'label label-warning';
  } else {
    label = 'label label-success';
  }

  let statusMessage;
  let statusBackground;
  if (error) {
    statusMessage = error.message;
    statusBackground = 'bg-danger';
  } else if (status === Status.FETCHING) {
    statusMessage = 'fetching data from db...';
    statusBackground = 'bg-info';
  } else if (status === Status.WRITING) {
    statusMessage = 'writing data to db...';
    statusBackground = 'bg-info';
  }

  return (
    <div>
      <h5 className="row">You have
        <span className={ label }>{ undoneTodo.length }</span> things to do:
        <span className={ `${statusBackground} pull-right` }>{ statusMessage }</span>
      </h5>
      <ul className="list-group">
        {
          data.map((t, idx) => <TodoItem key={ idx} t={ t } dispatch={ props.dispatch } />)
        }
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todo: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TodoList);
