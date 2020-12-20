import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configStore from "./Redux/Config"
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  configStore,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
