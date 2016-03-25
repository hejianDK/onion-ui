import {
  GET_PUBLISHERS_FAILURE,
  GET_PUBLISHERS_REQUEST,
  GET_PUBLISHERS_SUCCESS
} from '../constants/Constants';

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
      .then((res) => {
        if(res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          const error = new Error(res.status);
          error.res = res;
          throw error;
        }
      })
      .then((json) => dispatch(getPublishersSucceeded(json)))
      .catch((error) => {
        error.action = requestAction;
        dispatch(getPublishersFailed(error));
      });
  };
};
