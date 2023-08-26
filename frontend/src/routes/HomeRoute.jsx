import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';



const HomeRoute = ({sampleDataForPhotoList}) => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList photoList = {sampleDataForPhotoList}/>
    </div>
  );
};

export default HomeRoute;
