import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photoList, handleDisplayModal, toggleFavourite, isFavorited }) => {

  return (
    <ul className='photo-list'>
      {photoList.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          city={photo.location.city}
          country={photo.location.country}
          handleDisplayModal={handleDisplayModal}// Pass the photo id here
          toggleFavourite = {()=> toggleFavourite(photo.id)}
          isFavorited = {isFavorited(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
