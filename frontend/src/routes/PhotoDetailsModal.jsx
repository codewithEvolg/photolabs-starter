import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({displayModal, setDisplayModal}) => {
  const isDisplay = () => setDisplayModal(false);
  return (
    <div>
      { displayModal ?
        <div className="photo-details-modal">
          <button className="photo-details-modal__close-button">
            <img src={closeSymbol} alt="close symbol" onClick={isDisplay} />
          </button>
        </div>
        :
        null}
    </div>
  );
};

export default PhotoDetailsModal;
