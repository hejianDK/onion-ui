import React from 'react';
import TodoItem from './TodoItem';


export default class TodoList extends React.Component {
    render() {
        let todos = this.props.todos || {};
        let isFetching = this.props.isFetching;
        return <div>
            <p hidden={!isFetching}>Fetching todos</p>
            <ul>
                {
                    Object.keys(todos).map((key) => {
                        return <TodoItem todo={todos[key]} key={key}/>
                    })
                }
            </ul>
        </div>

    }
}
