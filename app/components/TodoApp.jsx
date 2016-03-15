import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/TodoActions';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodos());
  }

  refresh() {
    const { dispatch } = this.props;
    dispatch(fetchTodos());
  }

  render() {
    return (<div>
      <h1 style={{ rightMargin: '10px' }}>Todo List</h1>
      <span onClick={this.refresh}>refresh</span>
      <TodoList todos={this.props.todos} isFetching={this.props.isFetching} />
      <AddTodo />
    </div>);
  }
}

export default connect((state) => state || {})(TodoApp);
