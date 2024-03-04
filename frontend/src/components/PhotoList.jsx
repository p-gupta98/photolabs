import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const renderPhotoListItems = () => {
    return photos.map(photo => (
      <PhotoListItem key={photo.id}sampleDataForPhotoList={photo} />
    ));
  };

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {renderPhotoListItems()}
    </ul>
  );
};

export default PhotoList;
