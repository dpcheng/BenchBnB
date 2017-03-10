import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>BenchBnB!</h1>, root);

  let preloadedState;
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);

  window.store = store;
  window.signup = signup;
  window.logout = logout;
  window.login = login;

});
