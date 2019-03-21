import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../ducks/auth/auth_async";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    if (!this.props.user.username) {
      return <h1>Error: Please Log In</h1>;
    }
    return <h1>{this.props.user.username}'s Account</h1>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
