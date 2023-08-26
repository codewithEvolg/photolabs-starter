import React from "react";

import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";

const PhotoListItem = ({imageSource, profile, username, city, country}) => {
  return (
    <div className='photo-list__item'>
      <img className='photo-list__image' src={imageSource} alt='sample image'/>
      <div className="photo-list__user-details">
        <div className='photo-list__user-info'>
          <img className='photo-list__user-profile' src={profile} alt='sample image'/>
          <div>
            <h4>{username}</h4>
            <p className='photo-list__user-location'>
              {city}, {country}
            </p>
          </div>
        </div>
        <div><FavIcon /></div>
      </div>
      
    </div>
  );
};

export default PhotoListItem;
