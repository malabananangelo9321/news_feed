import React from "react";
const DropDown = (props) => {
  const { content,show,onClick} = props;
 
  return (
    <div className="button-option">
      <div className="dropdown">
        <button className="button-icon" onClick={onClick}>
          <i className="icon-ellipsis-horizontal" style={{ fontSize: 20 }}></i>{" "}
        </button>
        <div style={{display:show?'block':'none'}} className="dropdown-content">
        {content}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
