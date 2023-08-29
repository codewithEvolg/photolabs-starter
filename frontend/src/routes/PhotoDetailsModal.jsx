import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({displayModal, setDisplayModal, setSelectedPhotoId, modalPhotoInfo}) => {
  const handleCloseClick = () => {
    setSelectedPhotoId(0);
    setDisplayModal(false);
  };
  console.log(modalPhotoInfo);
  return (
    <div>
      { displayModal ?
        <div className="photo-details-modal">
          <button className="photo-details-modal__close-button">
            <img src={closeSymbol} alt="close symbol" onClick={handleCloseClick} />
          </button>
        </div>
        :
        null}
      {/* Modal content */}
      <div className='photo-details-modal__images'>
        <div className='photo-details-modal__image-container'>
          {/* <span>
            <PhotoFavButton
              selected={favorites.includes(modalPhoto?.id)}
              onClick={() => toggleFavorite(modalPhoto?.id)}
            />
          </span> */}
          {/* <img
            className='photo-details-modal__image'
            src={modalPhotoInfo?.urls.full}
            alt='photo-image'
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
