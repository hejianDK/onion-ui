import TodoConstants from '../constants/TodoConstants';
import fetch from 'isomorphic-fetch';

export function addTodoRequest(text) {
    return {
        type: TodoConstants.ADD_TODO_REQUEST,
        text
    }
}

export function addTodoSuccess(todos) {
    return {
        type: TodoConstants.ADD_TODO_SUCCESS,
        todos
    }
}

export function addTodoFailure(error) {
    return {
        type: TodoConstants.ADD_TODO_FAILURE,
        error
    }
}

export function removeTodoRequest(id) {
    return {
        type: TodoConstants.REMOVE_TODO_REQUEST,
        id
    }
}

export function removeTodoSuccess(todo) {
    return {
        type: TodoConstants.REMOVE_TODO_SUCCESS,
        todo
    }
}

export function removeTodoFailure(error) {
    return {
        type: TodoConstants.REMOVE_TODO_FAILURE,
        error
    }
}

export function getTodosRequest() {
    return {
        type: TodoConstants.GET_TODOS_REQUEST
    }
}

export function getTodosSuccess(todos) {
    return {
        type: TodoConstants.GET_TODOS_SUCCESS,
        todos
    }
}

export function getTodosFailure(error) {
    return {
        type: TodoConstants.GET_TODOS_FAILURE,
        error
    }
}

export function fetchTodos() {
    return dispatch => {
        dispatch(getTodosRequest());
        return fetch('http://127.0.0.1:3333/todos')
            .then(res => res.json())
            .then(json => dispatch(getTodosSuccess(json)));
    }
}
