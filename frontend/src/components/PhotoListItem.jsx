import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({id,  imageSource,  profile,  username,  city,  country,  handleDisplayModal, toggleFavourite, isFavorited}) => {
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={isFavorited} onClick={toggleFavourite} />
      <img className="photo-list__image" src={imageSource} alt="sample image" onClick={() => handleDisplayModal(id)} />
      <div className="photo-list__user-details">
        <div className="photo-list__user-info">
          <img className="photo-list__user-profile" src={profile} alt="sample image" />
          <div>
            <h4>{username}</h4>
            <p className="photo-list__user-location">
              {city}, {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
