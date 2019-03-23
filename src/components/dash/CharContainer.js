import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCharData } from "../../ducks/dash/dashAsync";
import CharDisplay from "./CharDisplay";

class CharContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
  }

  componentDidMount() {
    this.props.getAll(this.props.user.username);
  }

  handleInput = val => {
    this.setState({ searchInput: val });
  };

  render() {
    const charDisplay = this.props.pending
      ? "loading!"
      : this.props.allChars
          .filter(e =>
            e.charname
              .toLowerCase()
              .includes(this.state.searchInput.toLowerCase())
          )
          .map(f => <CharDisplay key={f.id} charData={f} />);

    return (
      <div className="mychars">
        <h3>My Characters</h3>
        <input
          type="text"
          placeholder="search"
          value={this.state.searchInput}
          onChange={e => this.handleInput(e.target.value)}
        />
        {charDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allChars: state.dashReducer.allChars,
    pending: state.dashReducer.pending,
    error: state.dashReducer.error,
    user: state.authReducer.user
  };
};

export default connect(
  mapStateToProps,
  { getAll: getAllCharData }
)(CharContainer);
