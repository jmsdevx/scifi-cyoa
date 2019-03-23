import React, { Component } from "react";
import { connect } from "react-redux";
import { submitCharData } from "../../../ducks/wiz/wizAsync";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charName: ""
    };
  }

  handleInput(val) {
    this.setState({ charName: val });
  }

  getRandomName = async () => {
    try {
      const response = await axios.get("/wizard/name");
      const name = (await response.data.name) + " " + response.data.surname;
      this.setState({
        charName: name
      });
    } catch (err) {
      alert("The name pools have run dry");
      console.log(err);
    }
  };

  render() {
    return (
      <div className="review">
        <h3 className="title">Review</h3>
        <span>
          <h4>Color: </h4>
          <h5>{this.props.charData.color}</h5>
        </span>
        <span>
          <h4>Race: </h4>
          <h5>{this.props.charData.race}</h5>
        </span>
        <span>
          <h4>Archetype: </h4>
          <h5>{this.props.charData.archetype}</h5>
        </span>
        <span>
          <h4>Fear: </h4>
          <h5>{this.props.charData.fear}</h5>
        </span>
        <span>
          <h4>Companion: </h4>
          <h5>{this.props.charData.pet}</h5>
        </span>
        <span>
          <h4>Connection: </h4>
          <h5>{this.props.charData.family}</h5>
        </span>
        <span>
          <input
            type="text"
            placeholder="Name"
            value={this.state.charName}
            onChange={e => this.handleInput(e.target.value)}
          />
          <button className="random" onClick={this.getRandomName}>
            Random
          </button>
        </span>
        <button
          className="submit"
          onClick={() =>
            this.state.charName
              ? this.props.submit(
                  this.props.charData,
                  this.props.username,
                  this.state.charName
                )
              : alert("Please name your character!")
          }
        >
          Save Character
        </button>
        {this.props.redirect ? <Redirect to="/dashboard" /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    charData: state.wizReducer.charData,
    allChars: state.wizReducer.allChars,
    pending: state.wizReducer.pending,
    error: state.wizReducer.error,
    username: state.authReducer.user.username,
    redirect: state.wizReducer.redirect
  };
};

export default connect(
  mapStateToProps,
  { submit: submitCharData }
)(Review);
