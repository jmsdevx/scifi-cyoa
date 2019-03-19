import React from "react";
import Nav from "./Nav";

const Layout = props => (
  <div>
    <Nav />
    {props.children}
  </div>
);

export default Layout;
