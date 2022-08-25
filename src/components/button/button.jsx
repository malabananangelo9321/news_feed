import React from "react";
import "./button.css";
import PropTypes from "prop-types";
const Button = (props) => {
  const { label, onClick, type } = props;
  return (
    <button type={type} className="button-style" onClick={onClick}>
      {label}
    </button>
  );
};
Button.prototype = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
