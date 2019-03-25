import React from "react";
import { connect } from "react-redux";
import { saveColor } from "../../../ducks/wiz/wizSync";

const Color = props => (
  <div className="choices">
    <h3>Color: {props.color ? props.color : null} </h3>
    <button onClick={() => props.save("Red")}>Red</button>
    <button onClick={() => props.save("Blue")}>Blue</button>
    <button onClick={() => props.save("Green")}>Green</button>
    <button onClick={() => props.save("Orange")}>Orange</button>
    <button onClick={() => props.save("Yellow")}>Yellow</button>
    <button onClick={() => props.save("Purple")}>Purple</button>
  </div>
);

const mapStateToProps = state => {
  return { color: state.wizReducer.charData.color };
};

export default connect(
  mapStateToProps,
  { save: saveColor }
)(Color);
