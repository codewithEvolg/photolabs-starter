import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({id, label, getPhotosForTopic}) => {
  return (
    <div className="topic-list__item">
      <p onClick={() => getPhotosForTopic(id)}>{label}</p>
    </div>
  );
};

export default TopicListItem;
