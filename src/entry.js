import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import getBaseName from './Utilities/getBaseName';
import { init } from './store';

ReactDOM.render(
    <Provider store={init().getStore()}>
        <Router basename={getBaseName(window.location.pathname)}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
