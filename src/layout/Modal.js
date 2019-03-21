import React from "react";

const Modal = props => (
  <div>
    <section>
      {props.children}
      <button onClick={props.handleClose}>close</button>
    </section>
  </div>
);

export default Modal;
