import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { selected, onClick } = props;
  return (
    <div className='photo-list__fav-icon' data-attr-photoid={props.photoId}>
      <div className='photo-list__fav-icon-svg' onClick={onClick}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;