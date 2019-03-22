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
    return (
      <div>
        <h3>Archetype</h3>
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
