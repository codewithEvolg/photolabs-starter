import { useState } from "react";
import photoData from 'mocks/photos';
import topicsData from 'mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    favourites : [],
    isDisplayModal : false,
    selectedPhotoId : 0,
    photos : photoData,
    topics : topicsData
  });
  
  const getSelectedPhotoInfo = () => {
    const foundPhoto = state.photos.find(photo => photo.id === state.selectedPhotoId); //find selected photo object with PhotoId
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

  return {
    state,
    getSelectedPhotoInfo,
    isFavorited,
    toggleModalSelect,
    handleCloseClick,
    handleDisplayModal,
    toggleFavourite
  };
};

export default useApplicationData;