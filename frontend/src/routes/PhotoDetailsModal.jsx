import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({modalPhotoInfo, state, setState, toggleModalSelect}) => {
  const handleCloseClick = () => {
    setState({...state, displayModal: false, selectedPhotoId : 0});
  };
  //retrieve the first photo in the photo array
  const simPhoto = modalPhotoInfo?.similarPhotos || [];
  const similarPhotoArray = simPhoto ? Object.keys(simPhoto).map((key)=>simPhoto[key]) : [];

  return (
    <div>
      { state.displayModal ?
        <div className="photo-details-modal">
          <button className="photo-details-modal__close-button">
            <img src={closeSymbol} alt="close symbol" onClick={handleCloseClick} />
          </button>
          {/* Modal content */}
          <div className='photo-details-modal__images'>
            <div className='photo-details-modal__image-container'>
              <span>
                <PhotoFavButton selected = {state.favourites.includes(modalPhotoInfo.id)}
                  onClick = {toggleModalSelect}
                />
              </span>
              <img
                className='photo-details-modal__image'
                src={modalPhotoInfo?.urls.full}
                alt='photo-image'
              />
            </div>
            <h4 className='photo-details-modal__header'>Similar Photos</h4>
            <PhotoList
              className='photo-details-modal--images'
              photoList={similarPhotoArray}
              setState={setState}
              state={state}
            />
          </div>
        </div>
        :
        null}
      {/* Modal content */}
      
    </div>
  );
};

export default PhotoDetailsModal;
