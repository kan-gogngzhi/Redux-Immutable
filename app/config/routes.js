import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import {MainContainer} from '../containers';
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={MainContainer}>
        </Route>
        <Route path="*" component={MainContainer}/>
    </Router>
);

export default routes;