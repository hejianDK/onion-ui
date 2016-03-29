import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from '../constants/Constants';
import {SyncObject, SyncMode} from './SyncObject';

export default function publisherReducer(state, action) {
  switch(action.type) {
    case GET_USERS_REQUEST:
      return Object.assign({}, state, new SyncObject(SyncMode.READING, state.data));
    case GET_USERS_SUCCESS:
      return Object.assign({}, state, new SyncObject(SyncMode.NONE, action.data));
    case GET_USERS_FAILURE:
      return Object.assign({}, state, new SyncObject(SyncMode.NONE, state.data, action.error));

    // case ADD_PUBLISHER_REQUEST:
    //   return Object.assign({}, state, new SyncObject(SyncMode.WRITING, state.data));
    // case ADD_PUBLISHER_SUCCESS:
    //   return Object.assign({}, state, new SyncObject(SyncMode.NONE, [
    //     ...state.data, action.data
    //   ]));
    // case ADD_PUBLISHER_FAILURE:
    //   return Object.assign({}, state, new SyncObject(SyncMode.NONE, state.data, action.error));
    default:
      return state;
  }
}
