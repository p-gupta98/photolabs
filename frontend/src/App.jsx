import React from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';



// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {renderPhotoListItems()} */}
      <TopNavigation/>
        
      
      <PhotoList/>
    </div>
  );
};

export default App;
