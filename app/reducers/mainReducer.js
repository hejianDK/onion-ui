import {USER_PROFILE} from '../constants/Constants';

export default function mainReducer(state = {}, action) {
  switch(action.type) {
    case USER_PROFILE:
      return {
        username: 'Onion'
      };
    default:
      return state;
  }
}
