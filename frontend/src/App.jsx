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

  const setDisplayModalFunc = () => {
    setDisplayModal(!displayModal);
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} displayModal={displayModal} setDisplayModalFunc={setDisplayModalFunc} />
      <PhotoDetailsModal displayModal={displayModal}/>
    </div>
  );
};

export default App;
