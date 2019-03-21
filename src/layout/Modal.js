import React from "react";

const Modal = props => (
  <div className="modal">
    <section className="main">
      {props.children}
      <button className="closebutton" onClick={props.handleClose}>
        Back
      </button>
    </section>
  </div>
);

export default Modal;
