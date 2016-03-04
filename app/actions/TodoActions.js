import TodoConstants from '../constants/TodoConstants';
import fetch from 'isomorphic-fetch';

let url = 'http://localhost:3333';

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

export function updateTodoRequest(todo) {
    return {
        type: TodoConstants.UPDATE_TODO_REQUEST,
        id: todo.id,
        todo
    }
}

export function updateTodoSuccess(todo) {
    return {
        type: TodoConstants.UPDATE_TODO_SUCCESS,
        id: todo.id,
        todo
    }
}

export function updateTodoFailure(error) {
    return {
        type: TodoConstants.UPDATE_TODO_FAILURE,
        id: error.id,
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
        return fetch(url + '/todos')
            .then(res => res.json())
            .then(json => dispatch(getTodosSuccess(json)));
    }
}

export function updateTodo(todo) {
    return dispatch => {
        dispatch(updateTodoRequest(todo));
        return fetch(url + '/todos/' + todo.id, {
            method: 'put',
            body: JSON.stringify(todo),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => dispatch(updateTodoSuccess(json)));
    }
}
