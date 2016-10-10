import React from 'react';
import ReactDOM from 'react-dom';
import {MainContainer} from './containers';
import routes from './config/routes';

ReactDOM.render(
    routes,
    document.getElementById('app')
);