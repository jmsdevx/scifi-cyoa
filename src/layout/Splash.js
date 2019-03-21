import React, { Component } from "react";
import Layout from "./Layout";
import Signup from "./SignUp";
import Login from "./Login";
import Modal from "./Modal";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      show: false
    };
  }

  showModal = type => {
    this.setState({ type: type }, () => this.setState({ show: true }));
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    return this.state.show ? (
      <Modal handleClose={this.closeModal}>
        {this.state.type === "login" ? <Login /> : <Signup />}
      </Modal>
    ) : (
      <Layout>
        <h1>Title</h1>
        <p>Introductory Information</p>
        <button onClick={() => this.showModal("login")}>Login</button>
        <button onClick={() => this.showModal("signup")}>Signup</button>
        {this.state.login ? <Login /> : null}
        {this.state.signup ? <Signup /> : null}
      </Layout>
    );
  }
}

export default Splash;
