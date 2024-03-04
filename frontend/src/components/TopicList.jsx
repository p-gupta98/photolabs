import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const renderTopicListItems= (topics) => {
  return topics.map(topic => (
    <TopicListItem key ={topic.id} title={topic.title} />
  ));
}

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {renderTopicListItems(props.topics)}
    </div>
  );
};

export default TopicList;
