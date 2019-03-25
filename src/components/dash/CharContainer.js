import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCharData } from "../../ducks/dash/dashAsync";
import CharDisplay from "./CharDisplay";
import { editChar } from "../../ducks/wiz/wizSync";

class CharContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "", showInfo: false };
  }

  componentDidMount() {
    this.props.getAll(this.props.user.username);
  }

  handleInput = val => {
    this.setState({ searchInput: val });
  };

  showModal = () => {
    this.setState({ showInfo: true });
  };

  closeModal = () => {
    this.setState({ showInfo: false });
  };

  render() {
    console.log(this.props.allChars);
    const charDisplay = this.props.pending
      ? "loading!"
      : this.props.allChars
          .filter(e =>
            e.charname
              .toLowerCase()
              .includes(this.state.searchInput.toLowerCase())
          )
          .map(f => (
            <CharDisplay
              key={f.id}
              charData={f}
              showModal={this.showModal}
              closeModal={this.closeModal}
              showInfo={this.state.showInfo}
              edit={this.props.edit}
            />
          ));

    return (
      <div className="mychars">
        <input
          type="text"
          placeholder="search"
          value={this.state.searchInput}
          onChange={e => this.handleInput(e.target.value)}
        />
        <div className="grid">{charDisplay}</div>
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
  { getAll: getAllCharData, edit: editChar }
)(CharContainer);
