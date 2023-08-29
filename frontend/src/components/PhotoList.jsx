import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photoList, favourites, setFavourites, setDisplayModal, setSelectedPhotoId }) => {
  const isDisplayModal = (id) =>{
    setDisplayModal(true);
    setSelectedPhotoId(id);
  };

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
          favourites={favourites}
          setFavourites={setFavourites}
          isDisplayModal={isDisplayModal}// Pass the photo id here
        />
      ))}
    </ul>
  );
};

export default PhotoList;
