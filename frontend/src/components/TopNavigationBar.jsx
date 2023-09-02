import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';

const TopNavigation = ({topics, isFavPhotoExist, getPhotosForTopic}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics = {topics} isFavPhotoExist = {isFavPhotoExist} getPhotosForTopic={getPhotosForTopic}/>
    </div>
  );
};

export default TopNavigation;