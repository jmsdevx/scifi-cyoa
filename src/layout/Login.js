import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { tryLogin } from "../ducks/auth/authAsync";
import { resetError } from "../ducks/auth/authSync";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.login(this.state.username, this.state.password);
      this.setState({ username: "", password: "" });
    } else {
      alert("Empty field");
    }
  };
  render() {
    console.log(this.props.user);
    if (this.props.user.username) {
      return <Redirect push to="/dashboard" />;
    }
    if (this.props.error) {
      alert("Try again!");
      this.props.reset();
    }
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            type="username"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error,
    pending: state.pending
  };
};

export default connect(
  mapStateToProps,
  { login: tryLogin, reset: resetError }
)(Login);
