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
  isDisplayModal,
  state,
  setState
}) => {
  const isFavorited = state.favourites.includes(id);

  const toggleSelect = () => {
    const newFavouritesArray = isFavorited
      ? state.favourites.filter(item => item !== id)
      : [...state.favourites, id];

    setState({...state, favourites: newFavouritesArray});
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
