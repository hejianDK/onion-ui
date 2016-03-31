import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import mainReducer from '../reducers/mainReducer';

export default function configureStore(initialState) {
  const store = createStore(
    mainReducer,
    initialState,
    applyMiddleware(thunkMiddleware, createLogger())
  );

  if (module.hot) {
    module.hot.accept('../reducers/mainReducer', () => {
      const nextRootReducer = require('../reducers/mainReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
