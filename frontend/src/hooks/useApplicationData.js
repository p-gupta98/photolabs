import React from "react";
import { useState } from "react";

function useApplicationData() {

  const [state, setState] = useState({
    displayModal: false,
    favorites: [],
    selectedPhoto: null,
  });
  
  
  const updateToFavPhotoIds = (newFavorites) => {
    setState((prev) => ({ ...prev, favorites: newFavorites }));
  };

  const setPhotoSelected = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, displayModal: false }));
  };

  const setDisplayModalFunc = () => {
    setState((prev) => ({ ...prev, displayModal: !prev.displayModal }));
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };
  
  
  
  const handleClick = (id) => {
    console.log("Photo Liked")
    if(state.favorites.includes(id)) {
      const filtered = state.favorites.filter((favorite) => {
        return (favorite !== id)
      })
      updateToFavPhotoIds(filtered);
    } else {
      const copy = [
        ...favorites, id
      ]
      updateToFavPhotoIds(copy)
    }
    
  }

  const applicationData = {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setDisplayModalFunc,
    handlePhotoClick,
    handleClick,
  };

  return applicationData;

}


export default useApplicationData;