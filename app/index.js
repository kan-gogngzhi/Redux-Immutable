import React from 'react';
import ReactDOM from 'react-dom';
import getRoutes from 'config/routes';
import users from 'redux/modules/users';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { checkIfAuthed } from 'helpers/auth';

const store = createStore(
    users,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store);
  const nextPathName = nextState.location.pathname;
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed === true) {
      replace('/feed');
    }
  } else {
    if (isAuthed !== true) {
      replace('/auth');
    }
  }
}

ReactDOM.render(
    <Provider store={store}>
      {getRoutes(checkAuth)}
    </Provider>,
    document.getElementById('app'));
