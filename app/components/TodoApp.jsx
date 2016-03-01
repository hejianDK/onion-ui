import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/TodoActions';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTodos());
    }

    //componentWillReceiveProps(nextProps) {
    //    const {dispatch, todos} = this.props;
    //    dispatch(fetchTodos());
    //}

    render() {
        return <div>
            <h1>Todo List</h1>
            <TodoList todos={this.props.todos} isFetching={this.props.isFetching} />
            <AddTodo />
        </div>
    }
}

export default connect((state) => {
    return state || {};
})(TodoApp);
