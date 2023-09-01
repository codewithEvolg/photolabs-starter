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
    displayModal : false,
    selectedPhotoId : 0
  });
  
  const getSelectedPhotoInfo = () => {
    const foundPhoto = photos.find(photo => photo.id === state.selectedPhotoId); //find selected photo object with PhotoId
    return foundPhoto;
  };

  return (
    <div className="App">
      <HomeRoute
        photos = {photos}
        topics = {topics}
        favourites = {state.favourites}
        setState = {setState}
        state = {state}
      />
      <PhotoDetailsModal
        setState = {setState}
        state = {state}
        modalPhotoInfo = {getSelectedPhotoInfo() ? getSelectedPhotoInfo() : null}
      />
    </div>
  );
};

export default App;
