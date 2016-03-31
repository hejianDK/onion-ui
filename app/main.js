import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import App from './views/App';
import TodoPage from './views/pages/TodoPage';
import NotFoundPage from './views/pages/NotFoundPage';
import HomePage from './views/pages/HomePage';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: { component: HomePage },
    childRoutes: [
      { path: 'todo', component: TodoPage },
      { path: '*', component: NotFoundPage }
    ]
  }
];

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
