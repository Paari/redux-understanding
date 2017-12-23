import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import data from './reducers'
import './index.css'
import Message from './containers/Message'

const store = createStore(data)

ReactDOM.render(
  <Provider store={store}>
    <Message />
  </Provider>
  , document.getElementById('root'));
