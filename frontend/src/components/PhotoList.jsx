import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photoList, setState, state }) => {
  const isDisplayModal = (id) =>{
    setState({...state, displayModal: true, selectedPhotoId : id});
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
          state = {state}
          setState = {setState}
          isDisplayModal={isDisplayModal}// Pass the photo id here
        />
      ))}
    </ul>
  );
};

export default PhotoList;
