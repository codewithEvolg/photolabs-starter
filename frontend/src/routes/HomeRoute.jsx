import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({photos, topics, setDisplayModal }) => {
  const [favourites, setFavourites] = useState([]);
  return (
    <div className="home-route">
      <TopNavigation topics = {topics} isFavPhotoExist = {favourites.length > 0 ? true : false}/>
      <PhotoList photoList = {photos}
        favourites = {favourites}
        setFavourites = {setFavourites}
        setDisplayModal = {setDisplayModal}
      />
    </div>
  );
};

export default HomeRoute;
