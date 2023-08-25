import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {photoListItem} = props;
  /* Insert React */
  return (
    <div className='photo-list__item'>
      <img className='photo-list__image' src={photoListItem.imageSource} alt='sample image'/>
      <img className='photo-list__user-profile' src={photoListItem.profile} alt='sample image'/>
      <h4 className='photo-list__user-info'>{photoListItem.username}</h4>
      <p className='photo-list__user-location'>
        {photoListItem.location.city}, {photoListItem.location.country}
      </p>
    </div>
  );
};

export default PhotoListItem;
