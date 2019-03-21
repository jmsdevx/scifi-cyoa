import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../ducks/auth/auth_async";
import Layout from "./Layout";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <Layout>
        {!this.props.user.username ? (
          <h1>Please Log In To View Your Dashboard</h1>
        ) : (
          <h1>{this.props.user.username}'s Account</h1>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
