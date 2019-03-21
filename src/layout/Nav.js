import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../ducks/auth/auth_async";

const Nav = props => (
  <nav>
    {props.user.username ? (
      <button onClick={props.logout}>Logout</button>
    ) : null}
    <Link to="/dashboard">Dashboard</Link>
  </nav>
);

const mapStateToProps = (state, ownProps) => {
  return { user: state.user, history: ownProps.history };
};

export default connect(
  mapStateToProps,
  { logout: logout }
)(Nav);
