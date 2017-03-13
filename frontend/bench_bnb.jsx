import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchBenches } from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let preloadedState;
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={ store } />, root);

  window.store = store;
  window.fetchBenches = fetchBenches;
});
