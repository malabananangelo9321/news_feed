import React from "react";
import "./newsFeed.css";
import Avatar from "../../components/avatar/avatar";
import UserImage from "../../assets/img/userImage.jpg";
const PostNewsFeed = (props) => {
  const { onClickModal, post } = props;
  return (
    <div className="post-parent">
      <div>
        <Avatar imageUrl={UserImage} size="lg" />
      </div>
      <div className="input-parent" onClick={() => onClickModal(true)}>
        <input
          onChange={() => ""}
          value={post.post}
          placeholder="Whats on your mind?"
          className="post-input"
        />
      </div>
    </div>
  );
};

export default React.memo(PostNewsFeed);
