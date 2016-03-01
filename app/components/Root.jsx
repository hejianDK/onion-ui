import {Provider} from 'react-redux';
import React from 'react';
import configureStore from '../store/configureStore';
import TodoApp from './TodoApp.jsx';

const store = configureStore();

export default class Root extends React.Component {
    render() {
        return <Provider store={store}>
            <TodoApp />
        </Provider>
    }
}
