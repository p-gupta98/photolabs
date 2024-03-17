import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onTopicSelect,
    onLoadTopic,
    onClosePhotoDetailsModal,
    photos,
    topics
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        onTopicSelect={onTopicSelect}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        onPhotoSelect={onPhotoSelect} 
        selectedPhoto={state.selectedPhoto} 
        selectedTopic={state.selectedTopic}
        favorites={state.favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />

      {state.displayModal && <PhotoDetailsModal 
        displayModal={state.displayModal} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        selectedPhoto={state.selectedPhoto} 
        favorites={state.favorites}
        onPhotoSelect={onPhotoSelect} 
        updateToFavPhotoIds={updateToFavPhotoIds}
      />}

    </div>
  );
};

export default App;
