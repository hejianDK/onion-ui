import {
  URL,
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE
} from "../constants/Constants";

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST
  };
};

export const getUsersSucceeded = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    data
  };
};

export const getUsersFailed = (error) => {
  return {
    type: GET_USERS_FAILURE,
    error
  };
};

export const getUsers = () => {
  return dispatch => {
    const requestAction = getUsersRequest();
    dispatch(requestAction);
    return fetch(`${URL}/publishers/1/users`) // TODO: refactor this
      .then((res) => res.json())
      .then((json) => {
        if(!json.status) {
          dispatch(getUsersSucceeded(json))
        } else {
          let error = new Error(json.status);
          error.json = json;
          throw error;
        }
      })
      .catch((error) => error.json)
      .then((json) => {
        if(json) {
          return {json, action: requestAction, method: getUsers() };
        }
      })
      .then((data) => {
        if(data) {
          dispatch(getUsersFailed(data))
        }
      });
  };
};

export const addUserRequest = (data) => {
  return {
    type: ADD_USER_REQUEST,
    data
  };
};

export const addUserSucceeded = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    data
  };
};

export const addUserFailed = (error) => {
  return {
    type: ADD_USER_FAILURE,
    error
  };
};

export const addUser = (data) => {
  return dispatch => {
    const requestAction = addUserRequest(data);
    dispatch(requestAction);
    return fetch(`${URL}/publishers/1/users`, { // TODO refactore needed
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestAction.data)
    })
      .then((res) => res.json())
      .then((json) => {
        if(!json.status) {
          dispatch(addUserSucceeded(json))
        } else {
          let error = new Error(json.status);
          error.json = json;
          throw error;
        }
      })
      .catch((error) => error.json)
      .then((json) => {
        if(json) {
          return {json, action: requestAction, method: addUser};
        }
      })
      .then((data) => {
        if(data) {
          dispatch(addUserFailed(data))
        }
      });
  };
};
