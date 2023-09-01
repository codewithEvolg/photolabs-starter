import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({modalPhotoInfo, state, setState}) => {
  const handleCloseClick = () => {
    setState({...state, displayModal: false, selectedPhotoId : 0});
  };
  //retrieve the first photo in the photo array
  // const simPhoto = modalPhotoInfo?.similarPhotos || [];
  // console.log('main photo:',Object.values(simPhoto));

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
              <img
                className='photo-details-modal__image'
                src={modalPhotoInfo?.urls.full}
                alt='photo-image'
              />
            </div>
            {/* <h4 className='photo-details-modal__header'>Similar Photos</h4>
            <PhotoList
              className='photo-details-modal--images'
              photos={Object.values(simPhoto)}
              // setState={setState}
              // state={state}
              //favorites={favorites}
              // toggleFavorite={toggleFavorite}
              // clickedPhoto={clickedPhoto}
              // expandModal={expandModal}
            /> */}
          </div>
        </div>
        :
        null}
      {/* Modal content */}
      
    </div>
  );
};

export default PhotoDetailsModal;
