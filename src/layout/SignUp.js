import React, { Component } from "react";
import { connect } from "react-redux";
import { trySignup } from "../ducks/auth/authAsync";
import { Redirect } from "react-router-dom";
import { resetError } from "../ducks/auth/authSync";

class Signup extends Component {
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
      this.props.signup(this.state.username, this.state.password);
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
        <h1 className="logtitle">Sign Up</h1>
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
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    error: state.authReducer.error,
    pending: state.authReducer.pending
  };
};

export default connect(
  mapStateToProps,
  { signup: trySignup, reset: resetError }
)(Signup);
