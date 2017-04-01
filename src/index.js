import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.js';
import {Provider} from 'react-redux';
import store from './store.js'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
