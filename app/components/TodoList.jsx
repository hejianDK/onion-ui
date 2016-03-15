import React from 'react';
import TodoItem from './TodoItem';


export default function TodoList({ todos = {}, isFetching }) {
  return (<div>
    <p hidden={!isFetching}>Fetching todos</p>
    <ul>
      {
        Object.keys(todos).map((key) => <TodoItem todo={ todos[key] } key={ key } />)
      }
    </ul>
  </div>);
}
