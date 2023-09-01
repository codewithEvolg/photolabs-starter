import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, favourites, handleDisplayModal, toggleFavourite, isFavorited }) => {
  
  return (
    <div className="home-route">
      <TopNavigation topics = {topics} isFavPhotoExist = {favourites.length > 0 ? true : false}/>
      <PhotoList photoList = {photos}
        favourites = {favourites}
        handleDisplayModal = {handleDisplayModal}
        toggleFavourite ={toggleFavourite}
        isFavorited = {isFavorited}
      />
    </div>
  );
};

export default HomeRoute;
