import React, { Component } from "react";
import "./App.css";
import routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return <BrowserRouter>{routes}</BrowserRouter>;
  }
}

export default App;
