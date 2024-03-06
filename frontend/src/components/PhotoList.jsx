import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const renderPhotoListItems = (photos) => {
    return photos.map(photo => (
      <PhotoListItem key={photo.id} photo={photo} isLiked={photo.isLiked} handleClick={photo.handleClick} />
    ));
  };

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {renderPhotoListItems(props.photos)}
    </ul>
  );
};

export default PhotoList;
