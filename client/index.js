import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';

// uncomment if implementing socket.io import io from 'socket.io-client'; const
// HOST = NODE_ENV === 'development' ? 'http://localhost:3000' :
// window.location.origin; const socket = io.connect(HOST);

import 'bootstrap-loader';
import './sass/style.scss';
import Router from './Router';
import reducers from './reducers';

const dev = NODE_ENV === 'development';

const createStoreWithMiddleware = dev
  ? applyMiddleware(promise, createLogger())(createStore)
  : applyMiddleware(promise)(createStore);

const store = dev
  ? createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  : createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
  <Router/>
</Provider>, document.querySelector('#app'));
