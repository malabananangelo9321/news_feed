import React from "react";
import "./card.css";
import PropTypes from "prop-types"; 
const Card = (props) => {
  const { content,classCustom } = props;
  return <div className={classCustom}>{content}</div>;
};
Card.prototype={
    content:PropTypes.element
}
export default Card;
