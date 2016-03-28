import {
  GET_PUBLISHERS_FAILURE,
  GET_PUBLISHERS_REQUEST,
  GET_PUBLISHERS_SUCCESS,
  ADD_PUBLISHER_REQUEST,
  ADD_PUBLISHER_SUCCESS,
  ADD_PUBLISHER_FAILURE
} from "../constants/Constants";

const url = 'http://localhost:8888/ms/rest';

export const getPublishersRequest = () => {
  return {
    type: GET_PUBLISHERS_REQUEST
  };
};

export const getPublishersSucceeded = (data) => {
  return {
    type: GET_PUBLISHERS_SUCCESS,
    data
  };
};

export const getPublishersFailed = (error) => {
  return {
    type: GET_PUBLISHERS_FAILURE,
    error
  };
};

export const getPublishers = () => {
  return dispatch => {
    const requestAction = getPublishersRequest();
    dispatch(requestAction);
    return fetch(`${url}/publishers/`)
      .then((res) => res.json())
      .then((json) => {
        if(!json.status) {
          dispatch(getPublishersSucceeded(json))
        } else {
          let error = new Error(json.status);
          error.json = json;
          throw error;
        }
      })
      .catch((error) => error.json)
      .then((json) => {
        if(json) {
          return {json, action: requestAction, method: getPublishers };
        }
      })
      .then((data) => {
        if(data) {
          dispatch(getPublishersFailed(data))
        }
      });
  };
};

export const addPublisherRequest = (data) => {
  return {
    type: ADD_PUBLISHER_REQUEST,
    data
  };
};

export const addPublisherSucceeded = (data) => {
  return {
    type: ADD_PUBLISHER_SUCCESS,
    data
  };
};

export const addPublisherFailed = (error) => {
  return {
    type: ADD_PUBLISHER_FAILURE,
    error
  };
};

export const addPublisher = (data) => {
  return dispatch => {
    const requestAction = addPublisherRequest(data);
    dispatch(requestAction);
    return fetch(`${url}/publishers/`, {
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
          dispatch(addPublisherSucceeded(json))
        } else {
          let error = new Error(json.status);
          error.json = json;
          throw error;
        }
      })
      .catch((error) => error.json)
      .then((json) => {
        if(json) {
          return {json, action: requestAction, method: addPublisher};
        }
      })
      .then((data) => {
        if(data) {
          dispatch(addPublisherFailed(data))
        }
      });
  };
};
