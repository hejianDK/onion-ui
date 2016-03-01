import React from 'react';

export default class AddTodo extends React.Component {
    render() {
        return <div>
            <label htmlFor="addTodo">Add new todo: </label>
            <input id="addTodo" type="text" />
        </div>
    }
}
