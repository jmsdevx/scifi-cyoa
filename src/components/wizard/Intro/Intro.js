import React from "react";
import Layout from "../../../layout/Layout";
import { Link } from "react-router-dom";
import SignUp from "../../../layout/SignUp";
import Login from "../../../layout/Login";

const Intro = () => (
  <Layout>
    <h1>Intro Title</h1>
    <p>Introductory Information</p>
    <Link to="/color">
      <button>Start Wizard</button>
    </Link>
    <SignUp />
    <Login />
  </Layout>
);

export default Intro;
