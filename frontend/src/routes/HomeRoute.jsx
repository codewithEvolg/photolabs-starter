import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';



const HomeRoute = ({photos}) => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList photoList = {photos}/>
    </div>
  );
};

export default HomeRoute;
