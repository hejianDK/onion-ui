import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../store/configureStore';
import TodoApp from './TodoApp.jsx';

const store = configureStore();

export default function Root() {
  return (<Provider store={store}>
    <TodoApp />
  </Provider>);
}
