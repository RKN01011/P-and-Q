import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers';

import App from './App';
import './index.css';

ReactDOM.render(
    <Provider store={ createStore(combineReducers(Reducers)) }>
        <App />
    </Provider>,

    document.getElementById('root')
);
unregister();
