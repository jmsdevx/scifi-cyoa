import React, { Component } from "react";
import Layout from "../../../layout/Layout";
import { Link } from "react-router-dom";

const Intro = () => (
  <Layout>
    <h1>Intro Title</h1>
    <p>Introductory Information</p>
    <Link to="/color">
      <button>Start Wizard</button>
    </Link>
  </Layout>
);

export default Intro;
