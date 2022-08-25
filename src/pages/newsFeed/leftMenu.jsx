import "./newsFeed.css";
import Home from "../../assets/img/home.png";
import Discussion from "../../assets/img/discussion.png";
import Friends from "../../assets/img/friends.png";
import Events from "../../assets/img/events.png";
import Video from "../../assets/img/video.png";
import Photo from "../../assets/img/photo.png";
import File from "../../assets/img/file.png";
import React from 'react'

const LeftMenu = () => {
  return (
    <div className="list">
      <div className="title">MENU</div>
      <div className="list-item">
        <img className="item-img" src={Home} />
        Home
      </div>
      <div className="list-item">
        <img className="item-img" src={Discussion} />
        Discussion
      </div>
      <div className="list-item">
      <img className="item-img" src={Friends} />
        Friends</div>
      <div className="list-item">
      <img className="item-img" src={Events} />
        Events</div>
      <div className="list-item">
      <img className="item-img" src={Video} />
        Videos</div>
      <div className="list-item">
      <img className="item-img" src={Photo} />
        Photos</div>
      <div className="list-item">
      <img className="item-img" src={File} />
        Files</div>
    </div>
  );
};

export default React.memo(LeftMenu);
