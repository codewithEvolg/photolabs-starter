import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    getSelectedPhotoInfo,
    isFavorited,
    toggleModalSelect,
    handleCloseClick,
    handleDisplayModal,
    toggleFavourite
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos = {state.photos}
        topics = {state.topics}
        favourites = {state.favourites}
        handleDisplayModal = {handleDisplayModal}
        toggleFavourite ={toggleFavourite}
        isFavorited = {isFavorited}
      />
      <PhotoDetailsModal
        isDisplayModal = {state.isDisplayModal}
        modalPhotoInfo = {getSelectedPhotoInfo() ? getSelectedPhotoInfo() : null}
        toggleModalSelect = {toggleModalSelect}
        handleCloseClick = {handleCloseClick}
        isFavorited = {isFavorited}
        toggleFavourite = {toggleFavourite}
      />
    </div>
  );
};

export default App;
