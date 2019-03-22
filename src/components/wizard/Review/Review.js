import React from "react";
import { connect } from "react-redux";
import { submitCharData } from "../../../ducks/wiz/wizAsync";

const Review = props => {
  return (
    <div className="review">
      <h1 className="title">Review</h1>
      <span>
        <h4>Color: </h4>
        <h5>{props.charData.color}</h5>
      </span>
      <span>
        <h4>Race: </h4>
        <h5>{props.charData.race}</h5>
      </span>
      <span>
        <h4>Archetype: </h4>
        <h5>{props.charData.archetype}</h5>
      </span>
      <span>
        <h4>Fear: </h4>
        <h5>{props.charData.fear}</h5>
      </span>
      <span>
        <h4>Companion: </h4>
        <h5>{props.charData.pet}</h5>
      </span>
      <span>
        <h4>Connection: </h4>
        <h5>{props.charData.family}</h5>
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    charData: state.wizReducer.charData,
    allChars: state.wizReducer.allChars,
    pending: state.wizReducer.pending,
    error: state.wizReducer.error
  };
};

export default connect(
  mapStateToProps,
  { submit: submitCharData }
)(Review);
