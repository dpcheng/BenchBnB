import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderLink = this.renderLink.bind(this);
  }

  renderHeader() {
    if (this.props.formType === 'login') {
      return (<h2>Log In</h2>);
    } else {
      return (<h2>Sign Up</h2>);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.setState({ username: "", password: "" })).then(() => this.props.router.push("/"))
    ;
  }

  handleInput(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  renderLink() {
    if (this.props.formType === 'login') {
      return (<Link to="/signup" >Sign Up</Link>);
    } else {
      return (<Link to="/login" >Log In</Link>);
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } >
        {this.renderHeader()}
        <label>Username
          <input onChange={ this.handleInput("username") } value={ this.state.username } />
        </label>
        <label>Password
          <input type="password" onChange={ this.handleInput("password") } value={ this.state.password } />
        </label>
        <input type="submit" />
        {this.renderLink()}
      </form>
    );
  }
}

export default SessionForm;
