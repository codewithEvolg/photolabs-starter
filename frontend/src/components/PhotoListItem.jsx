import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  id,
  imageSource,
  profile,
  username,
  city,
  country,
  favourites,
  setFavourites,
  isDisplayModal,
}) => {
  const isFavorited = favourites.includes(id);

  const toggleSelect = () => {
    const newFavouritesArray = isFavorited
      ? favourites.filter(item => item !== id)
      : [...favourites, id];

    setFavourites(newFavouritesArray);
  };

  const handleImageClick = () => {
    isDisplayModal(id);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={isFavorited} onClick={toggleSelect} />
      <img
        className="photo-list__image"
        src={imageSource}
        alt="sample image"
        onClick={handleImageClick} // Use the callback function here
      />
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
