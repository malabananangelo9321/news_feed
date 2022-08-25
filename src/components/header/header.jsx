import React from "react";
import "./header.css";
import PropTypes from "prop-types";
const Header = () => {
  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div className="header-parent">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div className="header-cotainer">
          <div className="header-flex">
            <i className="icon-reorder header-icon-style"></i>
            <div className="header-title">Social App</div>
            <div className="header-search">
              <div className="input-parent-color">
                <input placeholder="Search" className="post-input-color" />
              </div>
            </div>
          </div>
          <div className="header-icon-container">
            <i className="icon-search header-icon-style"></i>
            <i className="icon-bell-alt header-icon-style"></i>
            <i className="icon-cog header-icon-style"></i>
            <i onClick={logout} className="icon-signout header-icon-style"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
