import React from "react";
import { connect } from "react-redux";
import { saveRace } from "../../../ducks/wiz/wizSync";

const Race = props => (
  <div className="choices">
    <h3>Race: {props.race ? props.race : null}</h3>
    <button onClick={() => props.save("Terran")}>Terran</button>
    <button onClick={() => props.save("Insect")}>Insect</button>
    <button onClick={() => props.save("Tree")}>Tree</button>
    <button onClick={() => props.save("Water")}>Water</button>
    <button onClick={() => props.save("Spirit")}>Spirit</button>
    <button onClick={() => props.save("Dark")}>Dark</button>
    <button onClick={() => props.save("Fire")}>Fire</button>
    <button onClick={() => props.save("Lizard")}>Lizard</button>
    <button onClick={() => props.save("Rock")}>Rock</button>
    <button onClick={() => props.save("Tech")}>Tech</button>
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
