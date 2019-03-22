import React from "react";
import { connect } from "react-redux";
import { saveFamily } from "../../../ducks/wiz/wizSync";

const Family = props => (
  <div>
    <h3>Connection: {props.family ? props.family : null}</h3>
    <button onClick={() => props.save("Mom")}>Mom</button>
    <button onClick={() => props.save("Dad")}>Dad</button>
    <button onClick={() => props.save("Brother")}>Brother</button>
    <button onClick={() => props.save("Sister")}>Sister</button>
    <button onClick={() => props.save("Grandma")}>Grandpa</button>
    <button onClick={() => props.save("Uncle")}>Uncle</button>
    <button onClick={() => props.save("Aunt")}>Aunt</button>
    <button onClick={() => props.save("Cousin")}>Cousin</button>
    <button onClick={() => props.save("Friend")}>Friend</button>
  </div>
);

const mapStateToProps = state => {
  return {
    family: state.wizReducer.charData.family
  };
};

export default connect(
  mapStateToProps,
  { save: saveFamily }
)(Family);
