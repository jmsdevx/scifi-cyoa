import React, { Component } from "react";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Choose {this.props.amount}:</h1>
      </div>
    );
  }
}

export default Wizard;
