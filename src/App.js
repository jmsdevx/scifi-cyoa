import React, { Component } from "react";
import "./App.scss";
import routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/ducks/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>{routes}</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
