import * as TODO from '../constants/TodoConstants';
import { StateHolder, Status } from './StateHolder';

export default function todoReducer(state, action) {
  switch (action.type) {
    case TODO.GET_TODO_REQUEST:
      return Object.assign({}, state, new StateHolder(Status.FETCHING, state.data));
    case TODO.GET_TODO_SUCCESS:
      return Object.assign({}, state, new StateHolder(Status.NONE, action.data));
    case TODO.GET_TODO_FAILURE:
      return Object.assign({}, state, new StateHolder(Status.NONE, state.data, action.error));
    default:
      return state;
  }
}
