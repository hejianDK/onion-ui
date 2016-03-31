import React from 'react';
import { updateTodo, deleteTodo } from '../../actions/todoActions';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, t: props.t };
    this.quitEditMode = this.quitEditMode.bind(this);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleTodoRemove = this.handleTodoRemove.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ t: props.t });
  }
  quitEditMode(e) {
    if (e.key === 'Enter' || e.type === 'blur') {
      this.setState({ isEditing: false });
      if (this.state.t.item !== this.props.t.item) {
        this.props.dispatch(updateTodo(this.state.t));
      }
    }
  }

  enterEditMode() {
    this.setState({ isEditing: true });
  }

  handleToggleTodo() {
    const { dispatch } = this.props;
    const todoItem = Object.assign({}, this.state.t);
    todoItem.done = !todoItem.done;
    dispatch(updateTodo(todoItem));
  }

  handleItemChange(e) {
    const todoItem = Object.assign({}, this.state.t);
    todoItem.item = e.target.value;
    this.setState({ t: todoItem });
  }

  handleTodoRemove() {
    const { dispatch } = this.props;
    dispatch(deleteTodo(this.state.t.id));
  }

  render() {
    const { t } = this.state;
    return (
      <li className="list-group-item row">
        <span
          className={ `col-sm-1 glyphicon glyphicon-${t.done ? 'check' : 'unchecked'}` }
          onClick={ this.handleToggleTodo }
        />
        {
          this.state.isEditing ?
            <input type="text" className="col-sm-10" autoFocus
              value={ t.item } onKeyPress={ this.quitEditMode } onBlur={ this.quitEditMode }
              onChange={ this.handleItemChange }
            /> :
            <span className="col-sm-10" onDoubleClick={ this.enterEditMode } > { t.item }</span>
        }
        <span className="glyphicon glyphicon-remove col-sm-1" onClick={ this.handleTodoRemove } />
      </li>
    );
  }
}

TodoItem.propTypes = {
  t: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired
};
