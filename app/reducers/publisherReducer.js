import {
  GET_PUBLISHERS_FAILURE,
  GET_PUBLISHERS_REQUEST,
  GET_PUBLISHERS_SUCCESS,
  ADD_PUBLISHER_REQUEST,
  ADD_PUBLISHER_SUCCESS,
  ADD_PUBLISHER_FAILURE
} from '../constants/Constants';
import {SyncObject, SyncMode} from './SyncObject';

export default function publisherReducer(state, action) {
  switch(action.type) {
    case GET_PUBLISHERS_REQUEST:
      return Object.assign({}, state, new SyncObject(SyncMode.READING, state.data));
    case GET_PUBLISHERS_SUCCESS:
      return Object.assign({}, state, new SyncObject(SyncMode.NONE, action.data));
    case GET_PUBLISHERS_FAILURE:
      return Object.assign({}, state, new SyncObject(SyncMode.NONE, state.data, action.error));

    case ADD_PUBLISHER_REQUEST:
      return Object.assign({}, state, new SyncObject(SyncMode.WRITING, state.data));
    case ADD_PUBLISHER_SUCCESS:
      return Object.assign({}, state, new SyncObject(SyncMode.NONE, [
        ...state.data, action.data
      ]));
    case ADD_PUBLISHER_FAILURE:
      return Object.assign({}, state, new SyncObject(SyncMode.NONE, state.data, action.error));
    default:
      return state;
  }
}
