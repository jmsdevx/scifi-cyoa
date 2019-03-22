import React, { Component } from "react";
import wizardRoutes from "../../routes/wizardRoutes";


class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  render() {
    return <div>{wizardRoutes}</div>;
  }
}

export default Wizard;
