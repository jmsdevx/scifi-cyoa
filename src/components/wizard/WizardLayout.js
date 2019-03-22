import React, { Component } from "react";
import wizardRoutes from "../../routes/wizardRoutes";
import nextRoute from "./nextRoute";

class WizardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  navigate = async direction => {
    (await direction) === "back"
      ? this.setState({ index: this.state.index - 1 })
      : this.setState({ index: this.state.index + 1 });
    if (this.state.index < 0) {
      this.setState({ index: 0 }, () =>
        this.props.history.push(`/wizard${nextRoute[this.state.index]}`)
      );
    } else if (this.state.index > 6) {
      this.setState({ index: 6 }, () =>
        this.props.history.push(`/wizard${nextRoute[this.state.index]}`)
      );
    } else {
      this.props.history.push(`/wizard${nextRoute[this.state.index]}`);
    }
  };

  render() {
    return (
      <div>
        <h1>Choose:</h1>
        {wizardRoutes}
        <div>
          <button onClick={() => this.navigate("back")}>Back</button>
          <button onClick={() => this.navigate("next")}>Next</button>
        </div>
      </div>
    );
  }
}

export default WizardLayout;
