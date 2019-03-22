import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../ducks/auth/authAsync";

const Nav = props => (
  <nav>
    {props.user.username ? (
      <button onClick={props.logout}>Logout</button>
    ) : null}

    <Link to="/dashboard">Scifi CYOA</Link>
  </nav>
);

const mapStateToProps = state => {
  return { user: state.authReducer.user };
};

export default connect(
  mapStateToProps,
  { logout: logout }
)(Nav);
