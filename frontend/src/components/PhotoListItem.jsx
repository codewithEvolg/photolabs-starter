import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {imageSource, profile, username, city, country} = props;
  /* Insert React */
  return (
    <div className='photo-list__item'>
      <img className='photo-list__image' src={imageSource} alt='sample image'/>
      <img className='photo-list__user-profile' src={profile} alt='sample image'/>
      <h4 className='photo-list__user-info'>{username}</h4>
      <p className='photo-list__user-location'>
        {city}, {country}
      </p>
    </div>
  );
};

export default PhotoListItem;
