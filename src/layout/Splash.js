import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "./Layout";
import Signup from "./SignUp";
import Login from "./Login";
import Modal from "./Modal";
import { getUser, logout } from "../ducks/auth/auth_async";

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
        {this.props.user.username ? (
          <div>
            <h2>{this.props.user.username}, You are logged in!</h2>
            <button onClick={this.props.logout}>Log out?</button>
          </div>
        ) : (
          <div>
            <button onClick={() => this.showModal("login")}>Login</button>
            <button onClick={() => this.showModal("signup")}>Signup</button>
          </div>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getUser: getUser, logout: logout }
)(Splash);
