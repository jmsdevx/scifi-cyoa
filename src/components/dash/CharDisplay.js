import React from "react";
import Modal from "../../layout/Modal";
import { Link } from "react-router-dom";

const CharDisplay = props => (
  <div className="chars">
    <h3>{props.charData.charname}</h3>
    <button className="view" onClick={() => props.showModal(props.charData.id)}>
      View
    </button>
    {props.showInfo === true && props.showID === props.charData.id ? (
      <Modal handleClose={props.closeModal}>
        <div className="editview">
          <h1>
            <span />
            {props.charData.charname}
            <span />
          </h1>
          <span>
            <h4>Color: </h4>
            <h5>{props.charData.color}</h5>
          </span>
          <span>
            <h4>Race: </h4>
            <h5>{props.charData.race}</h5>
          </span>
          <span>
            <h4>Fear: </h4>
            <h5>{props.charData.fear}</h5>
          </span>
          <span>
            <h4>Archetype: </h4>
            <h5>{props.charData.archetype}</h5>
          </span>
          <span>
            <h4>Companion: </h4>
            <h5>{props.charData.pet}</h5>
          </span>
          <span>
            <h4>Connection: </h4>
            <h5>{props.charData.family}</h5>
          </span>
          <span className="update">
            <Link to="wizard/color" onClick={() => props.edit(props.charData)}>
              <button>Edit</button>
            </Link>
            <button
              onClick={() =>
                props
                  .delete(props.charData.id, props.username)
                  .then(props.closeModal)
              }
            >
              Delete
            </button>
          </span>
        </div>
      </Modal>
    ) : null}
  </div>
);

export default CharDisplay;
