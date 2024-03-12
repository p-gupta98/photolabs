import React from "react";
import { useState } from "react";

function useApplicationData() {

  const [state, setState] = useState({
    displayModal: false,
    favorites: [],
    selectedPhoto: null,
  });
  
  
  const setFavorites = (newFavorites) => {
    setState((prev) => ({ ...prev, favorites: newFavorites }));
  };

  const setSelectedPhoto = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }));
  };

  const setDisplayModal = () => {
    setState((prev) => ({ ...prev, displayModal: true }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, displayModal: !prev.displayModal }));
  };

  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };
  
  
  
  const updateToFavPhotoIds = (id) => {
    console.log("Photo Liked")
    if(state.favorites.includes(id)) {
      const filtered = state.favorites.filter((favorite) => {
        return (favorite !== id)
      })
      setFavorites(filtered);
    } else {
      const copy = [
        ...state.favorites, id
      ]
      setFavorites(copy)
    }
    
  }

  const applicationData = {
    state,
    updateToFavPhotoIds,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    onPhotoSelect,
  };

  return applicationData;

}


export default useApplicationData;