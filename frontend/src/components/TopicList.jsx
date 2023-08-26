import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import TopNavigation from "./TopNavigationBar";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const getTopics = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic) => (
        <TopicListItem
          key={topic.id}
          label={topic.title}
        />
      ))}
    </div>);
};

const TopicList = () => {
  return (
    <TopNavigation topics = {getTopics()}/>
  );
};

export default TopicList;
