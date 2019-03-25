import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../ducks/auth/authAsync";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import CharContainer from "../components/dash/CharContainer";

class Dashboard extends Component {
  componentDidMount() {
    return this.props.user.username ? null : this.props.getUser();
  }
  render() {
    return (
      <Layout>
        <Link to="/wizard/color">
          <button className="create">Create Character</button>
        </Link>
        {!this.props.user.username ? (
          this.props.history.push("/")
        ) : (
          <h1 className="dashTitle">{this.props.user.username}'s Characters</h1>
        )}
        <CharContainer />
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
