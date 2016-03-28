import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import CatalogPage from './pages/CatalogPage';
import PublishPage from './pages/PublishPage';
import AdminPage from './pages/AdminPage';
import HelpPage from './pages/HelpPage';
import NotFoundPage from './pages/NotFoundPage';
import configureStore from './store/configureStore';
import App from './components/App';

var routes = [
  {
    path: '/',
    component: App,
    indexRoute: {component: CatalogPage},
    childRoutes: [
      {path: 'catalog', component: CatalogPage},
      {path: 'publish', component: PublishPage},
      {path: 'admin', component: AdminPage},
      {path: 'help', component: HelpPage},
      {path: '*', component: NotFoundPage}
    ]
  }
];

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={ routes }/>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
