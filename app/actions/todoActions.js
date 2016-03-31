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
      .then((res) => {
        const status = res.status;
        return { status, json: res.json() };
      })
      .then(({ res, json }) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch(getTodoSucceeded(json));
        } else {
          const error = new Error(res.status);
          error.json = json;
          throw error;
        }
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
    dispatch(addTodo(data));
    return fetch('/api/todo', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        const status = res.status;
        return { status, json: res.json() };
      })
      .then(({ res, json }) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch(addTodoSucceeded(json));
        } else {
          const error = new Error(res.status);
          error.json = json;
          throw error;
        }
      })
      .catch((error) => {
        dispatch(addTodoFailed(error));
      });
  };
}
