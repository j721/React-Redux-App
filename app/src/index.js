import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { reducer }from './store/reducers/reducer';

import { rootReducer } from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store ={store}>
      <App />
    </Provider>,

  document.getElementById('root')
);


// const rootElement = document.getElementById('root');
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// );
