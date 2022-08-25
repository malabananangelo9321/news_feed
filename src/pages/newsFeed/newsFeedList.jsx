import React from "react";
import Card from "../../components/card/card";
import Avatar from "../../components/avatar/avatar";
import UserImage from "../../assets/img/userImage.jpg";
import moment from "moment";
import "./newsFeed.css";
import DropDown from "../../components/dropdown/dropdown";
const NewsFeedList = (props) => {
  const { data, deletePost, onClickUpdate,onClick,selectedIdex,index } = props;
  let post_data = data.post;
  post_data = post_data.replace(/\n/g, "<br />");
  return (
    <Card
      classCustom={"card-parent2"}
      content={
        <div>
          <div className="newsfeed-title">
            <Avatar imageUrl={UserImage} size='lg' />
            <div className="newsfeed-title-name">
              <p>
                <b>{data.name}</b>
                <br />
                <span className="font-color-light">
                  {moment(data.date).format("MMMM DD, YYYY") <
                  moment().format("MMMM DD, YYYY")
                    ? moment(data.date).format("MMMM DD, YYYY")
                    : moment(data.date).fromNow()}
                </span>
              </p>
            </div>
            <DropDown
             onClick={onClick}
             show={selectedIdex===index?true:false}
              content={
                <>
                  <div onClick={deletePost} className="list-item ">
                    <div className="dropdown-item">
                      <i className="icon-trash icon-size"></i>
                      Delete
                    </div>
                  </div>
                  <div onClick={onClickUpdate} className="list-item">
                    <div className="dropdown-item">
                      <i className="icon-edit icon-size"></i>
                      Edit
                    </div>
                  </div>
                </>
              }
            />
          </div>
          <div id="content">
            <div dangerouslySetInnerHTML={{ __html: post_data }} />
          </div>
        </div>
      }
    />
  );
};

export default React.memo(NewsFeedList);
