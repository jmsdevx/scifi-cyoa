import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCharData, deleteChar } from "../../ducks/dash/dashAsync";
import CharDisplay from "./CharDisplay";
import { editChar } from "../../ducks/wiz/wizSync";

class CharContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "", showInfo: false, showID: "" };
  }

  componentDidMount() {
    this.props.getAll(this.props.user.username);
  }

  componentDidUpate(prevProps) {
    if (this.props.allChars !== prevProps.allChars) {
      this.setState({ showInfo: false });
    }
  }

  handleInput = val => {
    this.setState({ searchInput: val });
  };

  showModal = id => {
    this.setState({ showInfo: true, showID: id });
  };

  closeModal = () => {
    this.setState({ showInfo: false, showID: "" });
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
          .map((f, j) => {
            console.log(f);
            return (
              <CharDisplay
                key={j}
                charData={f}
                showModal={this.showModal}
                closeModal={this.closeModal}
                showInfo={this.state.showInfo}
                edit={this.props.edit}
                delete={this.props.delete}
                username={this.props.user.username}
                showID={this.state.showID}
              />
            );
          });

    return (
      <div className="mychars">
        <input
          type="text"
          placeholder="search..."
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
  { getAll: getAllCharData, edit: editChar, delete: deleteChar }
)(CharContainer);
