import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {MainContainer, HomeContainer} from 'containers';

const routes = (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer}/>
      </Route>
      <Route path='*' component={MainContainer}/>
    </Router>
);

export default routes;
