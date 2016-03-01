import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import todoReducer from '../reducers/todoReducer';

export default function configureStore(initialState) {
    const store = createStore(
        todoReducer,
        initialState,
        applyMiddleware(thunkMiddleware, createLogger())
    );

    if(module.hot) {
        // Enable Webpack hot module replacement for reducers (from redux async example)
        module.hot.accept('../reducers/todoReducer', () => {
            const nextRootReducer = require('../reducers/todoReducer').default;
            console.log(nextRootReducer);
            store.replaceReducer(nextRootReducer)
        })
    }
    return store;
}
