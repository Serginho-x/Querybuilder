import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../src/store/index'
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store = { store }>
         <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
