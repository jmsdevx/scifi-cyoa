import React from "react";
import { connect } from "react-redux";
import { saveRace } from "../../../ducks/wiz/wizSync";

const Race = props => (
  <div>
    <h1>Race</h1>
    <button onClick={() => props.save("Terran")}>Terran</button>
    <button onClick={() => props.save("Insect")}>Insect</button>
    <button onClick={() => props.save("Tree")}>Tree</button>
    <button onClick={() => props.save("Water")}>Water</button>
    <button onClick={() => props.save("Spirit")}>Spirit</button>
    <button onClick={() => props.save("Dark Matter")}>Dark Matter</button>
  </div>
);

const mapStateToProps = state => {
  return {
    race: state.wizReducer.charData.race
  };
};

export default connect(
  mapStateToProps,
  { save: saveRace }
)(Race);
