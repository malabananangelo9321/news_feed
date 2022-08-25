import React from "react";
import './avatar.css'
import PropTypes from "prop-types"; 

const Avatar = (props) => {
    const{imageUrl,size} = props
    return (
          <img src={imageUrl} className={"avatar-"+size} />
        )
}
Avatar.prototype={
    label:PropTypes.any
}
export default Avatar;