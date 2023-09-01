import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [state, setState] = useState({
    favourites : [],
    isDisplayModal : false,
    selectedPhotoId : 0
  });
  
  const getSelectedPhotoInfo = () => {
    const foundPhoto = photos.find(photo => photo.id === state.selectedPhotoId); //find selected photo object with PhotoId
    return foundPhoto;
  };

  const isFavorited = (id) => {
    return state.favourites.includes(id);
  };

  const toggleModalSelect = () => {
    const newFavouritesArray = isFavorited(state.selectedPhotoId)
      ? state.favourites.filter(item => item !== state.selectedPhotoId)
      : [...state.favourites, state.selectedPhotoId];

    setState({...state, favourites: newFavouritesArray});
  };

  const handleCloseClick = () => {
    setState({...state, isDisplayModal: false, selectedPhotoId : 0});
  };

  const handleDisplayModal = (id) =>{
    setState({...state, isDisplayModal: true, selectedPhotoId : id});
  };

  const toggleFavourite = (id) => {
    const newFavouritesArray = state.favourites.includes(id)
      ? state.favourites.filter(item => item !== id)
      : [...state.favourites, id];

    setState({...state, favourites: newFavouritesArray});
  };

  

  return (
    <div className="App">
      <HomeRoute
        photos = {photos}
        topics = {topics}
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
