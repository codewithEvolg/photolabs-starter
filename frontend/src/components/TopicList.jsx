import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import FavBadge from "./FavBadge";

const TopicList = ({topics, isFavPhotoExist, getPhotosForTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          id = {topic.id}
          key={topic.id}
          label={topic.title}
          getPhotosForTopic = {getPhotosForTopic}
        />
      ))}
      <FavBadge isFavPhotoExist = {isFavPhotoExist} />
    </div>
  );
};

export default TopicList;
