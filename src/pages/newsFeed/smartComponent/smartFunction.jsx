import React from "react";
import UserImage from "../../../assets/img/userImage.jpg";
import Bg from "../../../assets/img/bg.jpg";
import Bg2 from "../../../assets/img/bg2.jpg";
import BurgerStore from "../../../assets/img/burger-store.JPG";
import UserImage2 from "../../../assets/img/userImage2.jpg";
import UserImage3 from "../../../assets/img/userImage3.jpg";
import UserImage4 from "../../../assets/img/userImage4.jpg";
import UserImage5 from "../../../assets/img/userImage5.jpg";

const SmartFunctionNewsFeed = () => {
  let name = sessionStorage.getItem('login')

  const [state, setState] = React.useState({
    openPostModal: false,
    newsFeedList: [ {
      name:name,
      post: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      comments: [],
      like: [],
      date: "2022-08-23 12:00",
    },
    {
      name:name,
      post: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      comments: [],
      like: [],
      date: "2022-08-24 15:00",
    },
    {
      name:name,
      post: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      comments: [],
      like: [],
      date: "2022-08-24 18:00",
    }],
    edit: false,
    post: {
      name:name,
      post: "",
      comments: [],
      like: [],
      date: "",
    },
    selectedIdex: "",
    stories:[{
      img:UserImage,
      bg:Bg
    },{
      img:UserImage,
      bg:Bg2
    },{
      img:UserImage,
      bg:Bg
    }],
    page:[{
      page_name:'Burger Store',
      bg:BurgerStore,
      img:''
    },{
      page_name:'Burger Store',
      bg:BurgerStore,
      img:''
    }],
    contacts:[{
      name:'Louis Patrick',img:UserImage2
    },{
      name:'Francis Gab',img:UserImage
    },
    {
      name:'Eurica Santos',img:UserImage3
    },
    {
      name:'Dexter Dawson',img:UserImage4
    },
    {
      name:'Marco Dawson',img:UserImage5
    },
    {
      name:'Louis Patrick',img:UserImage2
    },{
      name:'Francis Gab',img:UserImage
    },
    {
      name:'Eurica Santos',img:UserImage3
    },
    {
      name:'Dexter Dawson',img:UserImage4
    },
    {
      name:'Marco Dawson',img:UserImage5
    },
    {
      name:'Eurica Santos',img:UserImage3
    },
    {
      name:'Dexter Dawson',img:UserImage4
    },
    {
      name:'Marco Dawson',img:UserImage5
    },
    {
      name:'Eurica Santos',img:UserImage3
    },
   ]
  });
  const onClickModal = (status) => {
    setState((prev) => ({
      ...prev,
      openPostModal: status,
      edit: false,
      selectedIdex: "",
    }));
    if (edit) {
      setState((prev) => ({
        ...prev,
        post: {
          post: "",
          comments: [],
          like: [],
          date: "",
        },
      }));
    }
  };
  const onChangeTextPost = (e) => {
    let value = e.target.value;
    setState((prev) => ({
      ...prev,
      post: {
        ...state.post,
        post: value,
      },
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let post = state.post;
    post.date = new Date();
    
    if (state.edit) {
      setState((prev) => ({
        ...prev,
        newsFeedList: state.newsFeedList.map((val, index) =>
          index == state.selectedIdex
            ? { ...val, post: post.post, date: post.date }
            : val
        ),
        post: {
          name:name,
          post: "",
          comments: [],
          like: [],
          date: "",
        },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        newsFeedList: state.newsFeedList.concat(post),
        post: {
          post: "",
          comments: [],
          like: [],
          date: "",
        },
      }));
    }
    onClickModal(false);
  };
  const deletePost = (index) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let postData = state.newsFeedList.filter(
        (val, indexItem) => indexItem != index
      );
      setState((prev) => ({
        ...prev,
        newsFeedList: postData,
        selectedIdex:""
      }));
    }
  };
  const onClickUpdate = (data, index) => {
    setState((prev) => ({
      ...prev,
      post: data,
      openPostModal: true,
      edit: true,
      selectedIdex: index,
    }));
  };
  const sortFunction = (a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA < dateB ? 1 : -1;
  };
  
  const onClick =(index)=>{
    let newIndex = index
    if(selectedIdex === index){
      newIndex=''
    }
    setState((prev) => ({
      ...prev,
      selectedIdex: newIndex,
    }));
  }
  let openPostModal = state.openPostModal;
  let newsFeedList = state.newsFeedList.sort(sortFunction);
  let post = state.post;
  let edit = state.edit;
  let selectedIdex = state.selectedIdex
  let stories = state.stories
  let page = state.page
  let contacts = state.contacts

  return {
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
    contacts
  };
};

export default SmartFunctionNewsFeed;
