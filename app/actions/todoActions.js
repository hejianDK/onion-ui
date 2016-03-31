import * as TODO from '../constants/TodoConstants';

export function getTodoRequest() {
  return {
    type: TODO.GET_TODO_REQUEST
  };
}

export function getTodoSucceeded(data) {
  return {
    type: TODO.GET_TODO_SUCCESS,
    data
  };
}

export function getTodoFailed(error) {
  return {
    type: TODO.GET_TODO_FAILURE,
    error
  };
}

export function getTodo() {
  return dispatch => {
    dispatch(getTodoRequest());
    return fetch('/api/todo')
      .then((res) => res.json())
      .then((json) => {
        if (json.name) {
          const error = new Error(status);
          error.json = json;
          throw error;
        }
        return json;
      })
      .then((json) => {
        dispatch(getTodoSucceeded(json));
      })
      .catch((error) => {
        dispatch(getTodoFailed(error));
      });
  };
}

export function addTodoRequest(data) {
  return {
    type: TODO.ADD_TODO_REQUEST,
    data
  };
}

export function addTodoSucceeded(data) {
  return {
    type: TODO.ADD_TODO_SUCCESS,
    data
  };
}

export function addTodoFailed(error) {
  return {
    type: TODO.ADD_TODO_FAILURE,
    error
  };
}

export function addTodo(data) {
  return dispatch => {
    dispatch(addTodoRequest(data));
    return fetch('/api/todo', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.name) {
          const error = new Error(status);
          error.json = json;
          throw error;
        }
        return json;
      })
      .then((json) => {
        dispatch(addTodoSucceeded(json));
      })
      .catch((error) => {
        dispatch(addTodoFailed(error));
      });
  };
}

export function updateTodoRequest(data) {
  return {
    type: TODO.UPDATE_TODO_REQUEST,
    data
  };
}

export function updateTodoSucceeded(data) {
  return {
    type: TODO.UPDATE_TODO_SUCCESS,
    data
  };
}

export function updateTodoFailed(error) {
  return {
    type: TODO.UPDATE_TODO_FAILURE,
    error
  };
}

export function updateTodo(data) {
  return dispatch => {
    dispatch(updateTodoRequest(data));
    return fetch(`/api/todo/${data.id}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.name) {
          const error = new Error(status);
          error.json = json;
          throw error;
        }
        return json;
      })
      .then((json) => {
        dispatch(updateTodoSucceeded(json));
      })
      .catch((error) => {
        dispatch(updateTodoFailed(error));
      });
  };
}

export function deleteTodoRequest(data) {
  return {
    type: TODO.DELETE_TODO_REQUEST,
    data
  };
}

export function deleteTodoSucceeded(data) {
  return {
    type: TODO.DELETE_TODO_SUCCESS,
    data
  };
}

export function deleteTodoFailed(error) {
  return {
    type: TODO.DELETE_TODO_FAILURE,
    error
  };
}

export function deleteTodo(id) {
  return dispatch => {
    dispatch(deleteTodoRequest(id));
    return fetch(`/api/todo/${id}`, {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.name) {
          const error = new Error(status);
          error.json = json;
          throw error;
        }
        return json;
      })
      .then((json) => {
        dispatch(deleteTodoSucceeded(json));
      })
      .catch((error) => {
        dispatch(deleteTodoFailed(error));
      });
  };
}
