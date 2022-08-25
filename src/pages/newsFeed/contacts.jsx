import "./newsFeed.css";
import React from "react";
import Avatar from "../../components/avatar/avatar";
import UserImage from "../../assets/img/userImage.jpg";
const height = window.innerHeight
const Contacts = (props) => {
  const { contacts } = props;
  return (
    <div className="list">
      <div className="title">CONTACTS</div>
      <div >
      {contacts.map((val, index) => {
        return (
          <div key={index} className="list-item">
            <Avatar imageUrl={val.img} size="md" />
            <span className="contact-title">{val.name}</span>
            <div className="contact-online-icon" />
          </div>
        );
      })}
      </div>
    
    </div>
  );
};

export default React.memo(Contacts);
