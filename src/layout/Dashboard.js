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
          this.props.history.push("/")
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
