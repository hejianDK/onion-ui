import TodoConstants from '../constants/TodoConstants';

function flatTodos(todos) {
    let flattenedTodos = {};
    todos.forEach((todo) => {
        flattenedTodos[todo.id] = todo;
    });
    return flattenedTodos;
}

export default function todoReducer (state = {}, action) {
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
            return Object.assign({}, {
                todos: flatTodos(action.todos)
            });
    }
}
