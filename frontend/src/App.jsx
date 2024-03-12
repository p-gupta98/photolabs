import React from 'react';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  

  // const [displayModal, setDisplayModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  // const setDisplayModalFunc = () => {
  //   setDisplayModal(!displayModal);
  // }

  // const handlePhotoClick = (photo) => {
  //   setSelectedPhoto(photo);
  //   setDisplayModal(true);
  // };

  // const [favorites, setFavorites] = useState([]);
  
  // const handleClick = (id) => {
  //   console.log("Photo Liked")
  //   if(favorites.includes(id)) {
  //     const filtered = favorites.filter((favorite) => {
  //       return (favorite !== id)
  //     })
  //     setFavorites(filtered);
  //   } else {
  //     const copy = [
  //       ...favorites, id
  //     ]
  //     setFavorites(copy)
  //   }
    
  // }

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        setDisplayModalFunc={setDisplayModalFunc} 
        handlePhotoClick={handlePhotoClick} 
        selectedPhoto={state.selectedPhoto} 
        favorites={state.favorites}
        handleClick={handleClick}
      />

      {state.displayModal && <PhotoDetailsModal 
        displayModal={state.displayModal} 
        setDisplayModalFunc={setDisplayModalFunc} 
        selectedPhoto={state.selectedPhoto} 
        favorites={state.favorites}
        handleClick={handleClick}
      />}

    </div>
  );
};

export default App;
