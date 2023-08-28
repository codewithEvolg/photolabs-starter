import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import FavBadge from "./FavBadge";

const TopicList = ({topics, isFavPhotoExist}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          label={topic.title}
        />
      ))}
      <FavBadge isFavPhotoExist = {isFavPhotoExist} />
    </div>
  );
};

export default TopicList;
