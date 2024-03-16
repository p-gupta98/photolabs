import React from "react";
import { useState, useReducer } from "react";
import { useEffect } from "react";


/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload.id] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favorites: state.favorites.filter(favorite => favorite !== action.payload.id) };
      
    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload.photoData};  
    
    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topicData: action.payload.topicoData};
      
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo }  

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayModal: !state.displayModal };  
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}  


function useApplicationData() {

  const initialState = {
    displayModal: false,
    favorites: [],
    selectedPhoto: null,
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  const favPhotoAdded = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id }});
  }

  const favPhotoRemoved = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id }});
  }

  const setPhotoData = (photoData) => {
    dispatch( {type: ACTIONS.SET_PHOTO_DATA, payload: {photoData}} );
  }

  const setTopicData = (topicData) => {
    dispatch( { type: ACTIONS.SET_TOPIC_DATA, payload: {topicData} } )
  }
  
  const selectPhoto = (photo) => {
    dispatch({ type:ACTIONS.SELECT_PHOTO, payload: {photo} });
  }

  const displayPhotoDetails = () => {
    dispatch( { type: ACTIONS.DISPLAY_PHOTO_DETAILS});
  }

  // const setFavorites = (newFavorites) => {
  //   setState((prev) => ({ ...prev, favorites: newFavorites }));
  // };

  // const setSelectedPhoto = (photo) => {
  //   setState((prev) => ({ ...prev, selectedPhoto: photo }));
  // };

  // const setDisplayModal = () => {
  //   setState((prev) => ({ ...prev, displayModal: true }));
  // };

  // const onClosePhotoDetailsModal = () => {
  //   setState((prev) => ({ ...prev, displayModal: !prev.displayModal }));
  // };

  // const onPhotoSelect = (photo) => {
  //   setSelectedPhoto(photo);
  //   setDisplayModal(true);
  // };
  
  
  
  // const updateToFavPhotoIds = (id) => {
  //   console.log("Photo Liked")
  //   if(state.favorites.includes(id)) {
  //     const filtered = state.favorites.filter((favorite) => {
  //       return (favorite !== id)
  //     })
  //     setFavorites(filtered);
  //   } else {
  //     const copy = [
  //       ...state.favorites, id
  //     ]
  //     setFavorites(copy)
  //   }
    
  // }

  const applicationData = {
    // state,
    // updateToFavPhotoIds,
    // setSelectedPhoto,
    // onClosePhotoDetailsModal,
    // onPhotoSelect,
    favPhotoAdded,
    favPhotoRemoved,
    setPhotoData,
    setTopicData,
    selectPhoto,
    displayPhotoDetails
  };

  return applicationData;

}


export default useApplicationData;