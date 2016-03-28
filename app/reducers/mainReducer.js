import {USER_PROFILE} from '../constants/Constants';
import {
  GET_PUBLISHERS_FAILURE,
  GET_PUBLISHERS_REQUEST,
  GET_PUBLISHERS_SUCCESS,
  ADD_PUBLISHER_REQUEST,
  ADD_PUBLISHER_SUCCESS,
  ADD_PUBLISHER_FAILURE
} from '../constants/Constants';
import publisherReducer from './publisherReducer';
import {SyncObject, SyncMode} from "./SyncObject";

const defaultState = {
  publishers: new SyncObject(SyncMode.NONE, [])
};

export default function mainReducer(state = defaultState, action) {
  switch(action.type) {
    case USER_PROFILE:
      return Object.assign({}, state, {
        username: 'Onion'
      });
    case GET_PUBLISHERS_REQUEST:
    case GET_PUBLISHERS_SUCCESS:
    case GET_PUBLISHERS_FAILURE:
    case ADD_PUBLISHER_REQUEST:
    case ADD_PUBLISHER_SUCCESS:
    case ADD_PUBLISHER_FAILURE:
      return Object.assign({}, state, {
        publishers: publisherReducer(state.publishers, action)
      });
    default:
      return state;
  }
}
