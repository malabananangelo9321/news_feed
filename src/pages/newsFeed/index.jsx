import React from "react";
import "./newsFeed.css";
import LeftMenu from "./leftMenu";
import Card from "../../components/card/card";
import PostNewsFeed from "./postNewsFeed";
import SmartFunctionNewsFeed from "./smartComponent/smartFunction";
import NewsFeedList from "./newsFeedList";
import InputForm from "./inputForm";
import Avatar from "../../components/avatar/avatar";
import Stories from "./stories";
import Contacts from "./contacts";
const height = window.innerHeight;

const NewsFeed = () => {
  const {
    openPostModal,
    onClickModal,
    newsFeedList,
    post,
    onChangeTextPost,
    onSubmit,
    deletePost,
    onClickUpdate,
    edit,
    onClick,
    selectedIdex,
    stories,
    page,
    contacts,
  } = SmartFunctionNewsFeed();
  return (
    <div className="flex-container">
      <div className="left-menu">
        <Card content={<LeftMenu />} classCustom={"card-parent"} />
      </div>
      <div className="middle-container">
        <div className="card-content-data">
          <div className="card-content-data-container">
            <Card
              content={<PostNewsFeed onClickModal={onClickModal} post={post} />}
              classCustom={"card-parent2"}
            />
            <InputForm
              open={openPostModal}
              onClickModal={onClickModal}
              post={post}
              onChangeTextPost={onChangeTextPost}
              onSubmit={onSubmit}
              title={edit ? "Edit Post" : "Create Post"}
            />
            {newsFeedList.map((val, index) => {
              return (
                <div key={index} className="new-list">
                  <NewsFeedList
                    data={val}
                    deletePost={() => deletePost(index)}
                    onClickUpdate={() => onClickUpdate(val, index)}
                    onClick={() => onClick(index)}
                    selectedIdex={selectedIdex}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="card-content-story">
          <div className="card-content-story-container">
            <div>
              <Card
                content={
                  <div>
                    <p className="title-style">Stories</p>
                    <hr />
                    <div className="story-parent-scroll">
                      <div className="story-parent-container">
                        {stories.map((val, index) => {
                          return (
                            <div key={index}>
                              <Stories
                                content={
                                  <Avatar imageUrl={val.img} size="lg" />
                                }
                                bg={val.bg}
                                classValue="story-parent"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                }
                classCustom={"card-parent2"}
              ></Card>
              <div className="new-list">
                <Card
                  content={
                    <div>
                      <p className="title-style">Suggested Page</p>
                      <hr />
                      <div className="story-parent-scroll">
                        <div className="story-parent-container">
                          {page.map((val, index) => {
                            return (
                              <div>
                                <p className="title-style">{val.page_name}</p>
                                <Stories
                                  content={""}
                                  bg={val.bg}
                                  classValue="story-parent-page"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  }
                  classCustom={"card-parent2"}
                ></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-menu ">
        <div className="right-menu-content">
          <Contacts contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
