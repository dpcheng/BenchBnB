import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SearchContainer from './search_container';
import SessionFormContainer from './session/session_form_container';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if ( store.getState().session.currentUser ) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ SearchContainer } />
          <Route path="/login" onEnter={_redirectIfLoggedIn} component={ SessionFormContainer } />
          <Route path="/signup" onEnter={_redirectIfLoggedIn} component={ SessionFormContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
