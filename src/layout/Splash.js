import React, { Component } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import Signup from "./SignUp";
import Login from "./Login";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      signup: false
    };
  }

  toggler(type, other) {
    this.setState({ [type]: !this.state[type], [other]: false });
  }
  render() {
    return (
      <Layout>
        <h1>Title</h1>
        <p>Introductory Information</p>
        <button onClick={() => this.toggler("login", "signup")}>Login</button>
        <button onClick={() => this.toggler("signup", "login")}>Signup</button>
        {this.state.login ? <Login /> : null}
        {this.state.signup ? <Signup /> : null}
      </Layout>
    );
  }
}

export default Splash;
