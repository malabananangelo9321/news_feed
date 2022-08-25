import React from "react";
import "./modal.css";
import PropTypes from "prop-types";
const Modal = (props) => {
  const { open, onClickModal, content, title } = props;
  return (
    <div style={{ display: open ? "block" : "none" }} className="modal-parent">
      <div className="modal-content-lg">
        <div className="close-modal">
          <div>
            <p>
              <b>{title}</b>
            </p>
          </div>
          <button onClick={() => onClickModal(false)} className="button-icon">
            <i className="icon-remove"></i>
          </button>
        </div>
        <hr/>
        {content}
      </div>
    </div>
  );
};
Modal.prototype = {
  open: PropTypes.bool,
  onClickModal: PropTypes.func,
  content: PropTypes.element,
  title: PropTypes.string,
};

export default Modal;
