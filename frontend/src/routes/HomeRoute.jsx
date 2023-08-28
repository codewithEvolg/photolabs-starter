import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';


const HomeRoute = ({photos, topics }) => {
  const [favourites, setFavourites] = useState([]);
  return (
    <div className="home-route">
      <TopNavigation topics = {topics}/>
      <PhotoList photoList = {photos} favourites = {favourites} setFavourites = {setFavourites} />
    </div>
  );
};

export default HomeRoute;
