import React from 'react';
import {updateTodo} from '../actions/TodoActions';
import {connect} from 'react-redux';


class TodoItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }

    handleUpdateClick(e) {
        let {dispatch, todo} = this.props;
        todo.isDone = !todo.isDone;
        dispatch(updateTodo(todo))
    }

    render() {
        let {text, isDone} = this.props.todo;
        return <li>
            <span style={{textDecoration: isDone ? 'line-through' : 'none'}}
                  onClick={this.handleUpdateClick}>{text}</span>
        </li>
    }
}

export default connect((state) => {
    return state || {};
})(TodoItem);
