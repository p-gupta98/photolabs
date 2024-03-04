import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const renderTopicListItems= () => {
  return topics.map(topic => (
    <TopicListItem key ={topic.id} title={topic.title} />
  ));
}

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {renderTopicListItems()}
    </div>
  );
};

export default TopicList;
