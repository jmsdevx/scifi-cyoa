import React from "react";
import { connect } from "react-redux";
import { savePet } from "../../../ducks/wiz/wizSync";

const Companion = props => (
  <div className="choices">
    <h3>Companion: {props.pet ? props.pet : null}</h3>
    <button onClick={() => props.save("Bird")}>Bird</button>
    <button onClick={() => props.save("Dog")}>Dog</button>
    <button onClick={() => props.save("Cat")}>Cat</button>
    <button onClick={() => props.save("Robot")}>Robot</button>
    <button onClick={() => props.save("Bonsai")}>Bonsai</button>
    <button onClick={() => props.save("Fish")}>Fish</button>
    <button onClick={() => props.save("Rodent")}>Rodent</button>
    <button onClick={() => props.save("Drone")}>Drone</button>
  </div>
);

const mapStateToProps = state => {
  return {
    pet: state.wizReducer.charData.pet
  };
};

export default connect(
  mapStateToProps,
  { save: savePet }
)(Companion);
