import { useReducer } from "react";
import photoData from 'mocks/photos';
import topicData from 'mocks/topics';


const initialState = {
  favourites : [],
  isDisplayModal : false,
  selectedPhotoId : 0,
  photos : photoData,
  topics : topicData
};

/* insert app levels actions below */
const reducer = (state, action) => {
  switch (action.type) {
  case "SET_FAVORITES":
    return {...state, favourites: action.payload};
  case "SET_IS_DISPLAY_MODAL_SET_SELECTED_PHOTO_ID":
    return {...state, isDisplayModal: action.payload1, selectedPhotoId: action.payload2};
  case "SET_PHOTO_DATA":
    return {...state, photoData: action.payload};
  case "SET_TOPIC_DATA":
    return {...state, topicData: action.payload};
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
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

    dispatch({type: "SET_FAVORITES", payload: newFavouritesArray});
  };

  const handleCloseClick = () => {
    dispatch({type:"SET_IS_DISPLAY_MODAL_SET_SELECTED_PHOTO_ID", payload1:false, payload2:0 });
  };

  const handleDisplayModal = (id) =>{
    dispatch({type:"SET_IS_DISPLAY_MODAL_SET_SELECTED_PHOTO_ID", payload1:true, payload2:id });
  };

  const toggleFavourite = (id) => {
    const newFavouritesArray = state.favourites.includes(id)
      ? state.favourites.filter(item => item !== id)
      : [...state.favourites, id];

    dispatch({type:"SET_FAVORITES", payload: newFavouritesArray });

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