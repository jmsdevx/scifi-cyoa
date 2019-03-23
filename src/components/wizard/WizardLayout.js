import React, { Component } from "react";
import wizardRoutes from "../../routes/wizardRoutes";
import nextRoute from "./nextRoute";
import { Link } from "react-router-dom";

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
      <div className="wizLayout">
        <Link to="/dashboard">
          <button className="home">Home</button>
        </Link>
        {wizardRoutes}
        <div className="navigation">
          {this.state.index > 0 ? (
            <button onClick={() => this.navigate("back")}>Back</button>
          ) : null}

          {this.state.index < 6 ? (
            <button onClick={() => this.navigate("next")}>Next</button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default WizardLayout;
