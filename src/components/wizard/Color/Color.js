import React from "react";
import { connect } from "react-redux";
import { saveColor } from "../../../ducks/wiz/wizSync";

const Color = props => (
  <div>
    <h1>Color: {props.color ? props.color : null} </h1>
    <button onClick={() => props.save("Red")}>Red</button>
    <button onClick={() => props.save("Blue")}>Blue</button>
    <button onClick={() => props.save("Green")}>Green</button>
    <button onClick={() => props.save("Yellow")}>Yellow</button>
  </div>
);

const mapStateToProps = state => {
  return { color: state.wizReducer.charData.color };
};

export default connect(
  mapStateToProps,
  { save: saveColor }
)(Color);
