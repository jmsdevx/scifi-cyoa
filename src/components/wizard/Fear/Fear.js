import React from "react";
import { connect } from "react-redux";
import { saveFear } from "../../../ducks/wiz/wizSync";

const Fear = props => (
  <div className="choices">
    <h3>Fear: {props.fear ? props.fear : null}</h3>
    <button onClick={() => props.save("Heights")}>Heights</button>
    <button onClick={() => props.save("Bugs")}>Bugs</button>
    <button onClick={() => props.save("Blood")}>Blood</button>
    <button onClick={() => props.save("Trapped")}>Trapped</button>
    <button onClick={() => props.save("Drowning")}>Drowning</button>
    <button onClick={() => props.save("Speaking")}>Speaking</button>
    <button onClick={() => props.save("Darkness")}>Darkness</button>
    <button onClick={() => props.save("Needles")}>Needles</button>
    <button onClick={() => props.save("Bacteria")}>Bacteria</button>
    <button onClick={() => props.save("Abyss")}>Abyss</button>
    <button onClick={() => props.save("Predators")}>Predators</button>
    <button onClick={() => props.save("Violence")}>Violence</button>
  </div>
);

const mapStateToProps = state => {
  return {
    fear: state.wizReducer.charData.fear
  };
};

export default connect(
  mapStateToProps,
  { save: saveFear }
)(Fear);
