import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics,favourites, setState, state }) => {
  
  return (
    <div className="home-route">
      <TopNavigation topics = {topics} isFavPhotoExist = {favourites.length > 0 ? true : false}/>
      <PhotoList photoList = {photos}
        favourites = {favourites}
        setState = {setState}
        state = {state}
      />
    </div>
  );
};

export default HomeRoute;
