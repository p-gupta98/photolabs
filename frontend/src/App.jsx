import React from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';

// const sampleDataForPhotoListItem = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
//   {
//     id: "2",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
//   {
//     id: "3",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   }
// ];

// const renderPhotoListItems = () => {
//   return sampleDataForPhotoListItem.map(photo => (
//     <PhotoListItem key={photo.id}sampleDataForPhotoListItem={photo} />
//   ));
// };

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {renderPhotoListItems()} */}
      <TopicList />
      <PhotoList/>
    </div>
  );
};

export default App;
