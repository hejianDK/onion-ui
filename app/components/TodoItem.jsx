import React from 'react';
import { updateTodo, removeTodo } from '../actions/TodoActions';
import { connect } from 'react-redux';


class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleUpdateClick() {
    const { dispatch, todo } = this.props;
    todo.isDone = !todo.isDone;
    dispatch(updateTodo(todo));
  }

  handleRemoveClick() {
    const { dispatch, todo } = this.props;
    dispatch(removeTodo(todo.id));
  }

  render() {
    const { text, isDone } = this.props.todo;
    const textDecoration = isDone ? 'line-through' : 'none';
    return (<li>
            <span style={{ textDecoration }} onClick={this.handleUpdateClick} >{text}</span>
      <span onClick={this.handleRemoveClick}> &times;</span>
    </li>);
  }
}

export default connect((state) => state || {})(TodoItem);
