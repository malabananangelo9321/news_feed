import React from 'react';
import Bg2 from "../../assets/img/bg2.jpg";
import "./newsFeed.css";

const Stories = (props) => {
  const { content,bg,classValue} = props;
  return <div className={classValue}>
    <img src={bg} className='story-bg'/>
    <div className='story-avatar'>
    {content}
    </div>
   </div>;
};

export default Stories;
