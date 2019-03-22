import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../ducks/auth/authAsync";
import Layout from "./Layout";
import { Link } from "react-router-dom";

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
        <Link to="/wizard/color">
          <button>Create Character</button>
        </Link>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
