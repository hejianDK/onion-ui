import React from 'react';

export default class TodoItem extends React.Component {

    render() {
        let {text, isDone} = this.props.todo;
        return <li>
            <span style={{textDecoration: isDone ? 'line-through' : 'none'}}>{text}</span>
        </li>
    }
}
