import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <section className="greeting">
        <h2>Welcome, { currentUser.username }!</h2>
        <button onClick={ logout } >Log Out</button>
      </section>
    );
  } else {
    return (
      <section className="greeting">
        <Link to="/login" >Log In!</Link>
        <Link to="/signup" >Sign Up!</Link>
      </section>
    );
  }
};

export default Greeting;
