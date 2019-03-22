import React, { Component } from "react";
import { connect } from "react-redux";
import { saveColor } from "../../../ducks/wiz/wizSync";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Color</h1>
        <button onClick={() => this.props.save("red")}>Red</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { color: state.wizReducer.charData.color };
};

export default connect(
  mapStateToProps,
  { save: saveColor }
)(Color);
