import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={() => props.onTopicSelect(props.topic.id)}>
      {props.title} 
    </div>
  );
};

export default TopicListItem;
