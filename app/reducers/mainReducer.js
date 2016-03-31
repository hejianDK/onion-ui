import * as TODO from '../constants/TodoConstants';
import todoReducer from './todoReducer';
import { StateHolder, Status } from './StateHolder';

const defaultState = {
  todo: new StateHolder(Status.NONE, [])
};

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case TODO.GET_TODO_REQUEST:
    case TODO.GET_TODO_SUCCESS:
    case TODO.GET_TODO_FAILURE:
    case TODO.ADD_TODO_REQUEST:
    case TODO.ADD_TODO_SUCCESS:
    case TODO.ADD_TODO_FAILURE:
      return Object.assign({}, state, {
        todo: todoReducer(state.todo, action)
      });
    default:
      return state;
  }
}
