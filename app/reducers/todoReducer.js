import * as TODO from '../constants/TodoConstants';
import { StateHolder, Status } from './StateHolder';
import lodash from 'lodash';

export default function todoReducer(state, action) {
  switch (action.type) {
    case TODO.GET_TODO_REQUEST:
      return Object.assign({}, state, new StateHolder(Status.FETCHING, state.data));
    case TODO.GET_TODO_SUCCESS:
      return Object.assign({}, state, new StateHolder(Status.NONE, action.data));
    case TODO.GET_TODO_FAILURE:
      return Object.assign({}, state, new StateHolder(Status.NONE, state.data, action.error));
    case TODO.ADD_TODO_REQUEST:
      return Object.assign({}, state, new StateHolder(Status.WRITING, state.data));
    case TODO.ADD_TODO_SUCCESS:
      return Object.assign({}, state, new StateHolder(Status.NONE, [...state.data, action.data]));
    case TODO.ADD_TODO_FAILURE:
      return Object.assign({}, state, new StateHolder(Status.NONE, state.data, action.error));
    case TODO.UPDATE_TODO_REQUEST:
      return Object.assign({}, state, new StateHolder(Status.WRITING, state.data));
    case TODO.UPDATE_TODO_SUCCESS: {
      const idx = lodash.findIndex(state.data, { id: action.data.id });
      const oldData = state.data;
      const newData = [...oldData.slice(0, idx), action.data, ...oldData.slice(idx + 1)];
      return Object.assign({}, state, new StateHolder(Status.NONE, newData));
    }
    case TODO.UPDATE_TODO_FAILURE:
      return Object.assign({}, state, new StateHolder(Status.NONE, state.data, action.error));
    case TODO.DELETE_TODO_REQUEST:
      return Object.assign({}, state, new StateHolder(Status.WRITING, state.data));
    case TODO.DELETE_TODO_SUCCESS: {
      const idx = lodash.findIndex(state.data, { id: action.data.id });
      const oldData = state.data;
      const newData = [...oldData.slice(0, idx), ...oldData.slice(idx + 1)];
      return Object.assign({}, state, new StateHolder(Status.NONE, newData));
    }
    case TODO.DELETE_TODO_FAILURE:
      return Object.assign({}, state, new StateHolder(Status.NONE, state.data, action.error));
    default:
      return state;
  }
}
