import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { saveArchetype } from "../../../ducks/wiz/wizSync";
import ArchetypeDisplay from "./ArchetypeDisplay";

class Archetype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archetypes: []
    };
  }

  componentDidMount() {
    this.getArchetypes();
  }

  getArchetypes = () => {
    axios
      .get("http://arcapi.org/api/types")
      .then(response => this.setState({ archetypes: response.data.types }));
  };

  render() {
    const { archetype } = this.props;
    return (
      <div className="choices">
        <h3>
          Archetype:{" "}
          {archetype
            ? archetype.charAt(0).toUpperCase() + archetype.slice(1)
            : null}
        </h3>
        <ArchetypeDisplay
          save={this.props.save}
          archetypes={this.state.archetypes}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    archetype: state.wizReducer.charData.archetype
  };
};
export default connect(
  mapStateToProps,
  { save: saveArchetype }
)(Archetype);
