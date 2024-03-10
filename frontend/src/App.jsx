import React from 'react';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {
  

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const setDisplayModalFunc = () => {
    setDisplayModal(!displayModal);
  }

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayModalFunc={setDisplayModalFunc} handlePhotoClick={handlePhotoClick} selectedPhoto={selectedPhoto}/>
      {displayModal && <PhotoDetailsModal displayModal={displayModal} setDisplayModalFunc={setDisplayModalFunc} selectedPhoto={selectedPhoto}/>}
    </div>
  );
};

export default App;
