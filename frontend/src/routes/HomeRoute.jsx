import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, setDisplayModal,favourites, setFavourites, setSelectedPhotoId }) => {
  
  return (
    <div className="home-route">
      <TopNavigation topics = {topics} isFavPhotoExist = {favourites.length > 0 ? true : false}/>
      <PhotoList photoList = {photos}
        favourites = {favourites}
        setFavourites = {setFavourites}
        setDisplayModal = {setDisplayModal}
        setSelectedPhotoId = {setSelectedPhotoId}
      />
    </div>
  );
};

export default HomeRoute;
