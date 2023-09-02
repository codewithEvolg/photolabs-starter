import { useReducer, useEffect } from "react";
//import topicData from "mocks/topics";
//import photoData from "mocks/photos";


const initialState = {
  favourites : [],
  isDisplayModal : false,
  selectedPhotoId : 0,
  photos : [],
  topics : [],
  selectedTopic: []
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
  case "SET_SELECTED_TOPIC":
    return { ...state, selectedTopic: action.payload };
  default:
    return state;
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

  const getPhotosForTopic = (topicID) => {
    if (topicID === "logo") {
      dispatch({ type: 'SET_SELECTED_TOPIC', payload: [] });
    } else {
      dispatch({ type: 'SET_SELECTED_TOPIC', payload: [topicID] });
    }
  };


  useEffect(() => {
    if (state.selectedTopic.length === 0) {
      fetch(`/api/photos`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_PHOTO_DATA', payload: data });
        })
        .catch((error) => {
          console.error('An error occurred while fetching photos:', error);
        });
    } else {
      fetch(`/api/topics/photos/${state.selectedTopic[0]}/`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_PHOTO_DATA', payload: data });
        })
        .catch((error) => {
          console.error('An error occurred while fetching photos for topic:', error);
        });
    }
  }, [state.selectedTopic]);

  useEffect(() => {
    fetch(`/api/topics`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_TOPIC_DATA', payload: data });
      })
      .catch((e) => console.error('An error has occurred', e));
  }, []);

  return {
    state,
    getSelectedPhotoInfo,
    isFavorited,
    toggleModalSelect,
    handleCloseClick,
    handleDisplayModal,
    toggleFavourite,
    getPhotosForTopic
  };
};

export default useApplicationData;