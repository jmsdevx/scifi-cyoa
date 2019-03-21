import React from "react";
import Nav from "./Nav";

const Layout = props => (
  <div className="layout">
    <Nav />
    {props.children}
  </div>
);

export default Layout;
