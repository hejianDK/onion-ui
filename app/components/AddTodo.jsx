import React from 'react';
import { addTodo } from '../actions/TodoActions';
import { connect } from 'react-redux';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(event) {
    const dispatch = this.props.dispatch;
    const text = event.target.value;
    if (event.keyCode === 13) {
      dispatch(addTodo(text));
      const inputEL = event.target;
      inputEL.value = '';
    }
  }

  render() {
    return (<div>
      <label htmlFor="addTodo">Add new todo: </label>
      <input id="addTodo" type="text" onKeyDown={this.handleAddTodo} />
    </div>);
  }
}

export default connect((state) => state || {})(AddTodo);
