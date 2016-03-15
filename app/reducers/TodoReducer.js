import TodoConstants from '../constants/TodoConstants';

function flatTodos(todos) {
  const flattenedTodos = {};
  todos.forEach((todo) => {
    flattenedTodos[todo.id] = todo;
  });
  return flattenedTodos;
}

function getTodosReducer(state = {}, action) {
  switch (action.type) {
    case TodoConstants.GET_TODOS_REQUEST:
      return Object.assign({}, {
        isFetching: true,
        todos: state.todos || {}
      });
    case TodoConstants.GET_TODOS_SUCCESS:
      return Object.assign({}, {
        todos: flatTodos(action.todos)
      });
    case TodoConstants.GET_TODOS_FAILURE:
      return null;
    default:
      return state;
  }
}

function updateTodoReducer(state = {}, action) {
  switch (action.type) {
    case TodoConstants.UPDATE_TODO_REQUEST:
      return Object.assign({}, action.todo, {
        isUpdating: true
      });
    case TodoConstants.UPDATE_TODO_SUCCESS:
      return Object.assign({}, action.todo, {
        isUpdating: false
      });
    case TodoConstants.UPDATE_TODO_FAILURE:
      return null;
    default:
      return state;
  }
}


export default function todoReducer(state = {}, action) {
  switch (action.type) {
    case TodoConstants.GET_TODOS_REQUEST:
    case TodoConstants.GET_TODOS_SUCCESS:
    case TodoConstants.GET_TODOS_FAILURE:
      return getTodosReducer(state, action);
    case TodoConstants.UPDATE_TODO_REQUEST:
    case TodoConstants.UPDATE_TODO_SUCCESS:
    case TodoConstants.UPDATE_TODO_FAILURE:
      return Object.assign({}, state, {
        todos: Object.assign({}, state.todos, {
          [action.todo.id]: updateTodoReducer(state[action.todo.id], action)
        })
      });
    case TodoConstants.ADD_TODO_REQUEST:
      return Object.assign({}, state, {
        isAdding: true
      });
    case TodoConstants.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        isAdding: false,
        todos: Object.assign({}, state.todos, {
          [action.todo.id]: action.todo
        })
      });
    case TodoConstants.ADD_TODO_FAILURE:
      return null;
    case TodoConstants.REMOVE_TODO_REQUEST:
      return Object.assign({}, state, {
        todos: Object.assign({}, state.todos, {
          [action.id]: Object.assign({}, state.todos[action.id], {
            isRemoving: true
          })
        })
      });
    case TodoConstants.REMOVE_TODO_SUCCESS: {
      const todos = state.todos;
      delete todos[action.todo.id];

      return Object.assign({}, state, {
        todos: Object.assign({}, todos)
      });
    }
    case TodoConstants.REMOVE_TODO_FAILURE:
      return null;
    default:
      return state;
  }
}
