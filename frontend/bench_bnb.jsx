import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>BenchBnB!</h1>, root);
  window.signup = signup;
  window.logout = logout;
  window.login = login;

});
