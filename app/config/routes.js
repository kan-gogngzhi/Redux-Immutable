import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, LogoutContainer} from 'containers';

export default function getRoutes (checkAuth) {
  return (
      <Router history={hashHistory}>
        <Route path='/' component={MainContainer}>
          <IndexRoute component={HomeContainer} onEnter={checkAuth}/>
          <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth}/>
          <Route path='feed' component={FeedContainer} onEnter={checkAuth}/>
          <Route path='logout' component={LogoutContainer} onEnter={checkAuth}/>
        </Route>
        <Route path='*' component={MainContainer}/>
      </Router>
  );
}

