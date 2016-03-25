import {
  GET_PUBLISHERS_FAILURE,
  GET_PUBLISHERS_REQUEST,
  GET_PUBLISHERS_SUCCESS
} from '../constants/Constants';
import {SyncObject, SyncMode} from './SyncObject';

export default function publisherReducer(state, action) {
  switch(action.type) {
    case GET_PUBLISHERS_REQUEST:
      return Object.assign({}, state, new SyncObject(SyncMode.READING, state.data));
    case GET_PUBLISHERS_SUCCESS:
      return Object.assign({}, state, new SyncObject(SyncMode.NONE, action.data));
    case GET_PUBLISHERS_FAILURE:
      return Object.assign({}, state, new SyncObject(SyncMode.NONE, state.data, error));
    default:
      return state;
  }
}
