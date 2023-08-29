import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(0);
  
  const getSelectedPhotoInfo = () => {
    return photos.find(photo => photo.id === selectedPhotoId); //find selected photo object with PhotoId
  };

  return (
    <div className="App">
      <HomeRoute
        photos = {photos}
        topics = {topics}
        setDisplayModal = {setDisplayModal}
        favourites = {favourites}
        setFavourites = {setFavourites}
        setSelectedPhotoId = {setSelectedPhotoId}
      />
      <PhotoDetailsModal
        displayModal = {displayModal}
        setDisplayModal = {setDisplayModal}
        setSelectedPhotoId = {setSelectedPhotoId}
        modalPhotoInfo = {getSelectedPhotoInfo() ? getSelectedPhotoInfo() : null}
      />
    </div>
  );
};

export default App;
