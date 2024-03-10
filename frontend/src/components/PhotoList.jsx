import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";




const PhotoList = (props) => {

  

  const renderPhotoListItems = (photos) => {
    return photos.map(photo => (
      <PhotoListItem 
      key={photo.id} 
      photo={photo} 
      isLiked={props.favorites && props.favorites.includes(photo.id)} 
      handleClick={props.handleClick} 
      handlePhotoClick={props.handlePhotoClick}
      setDisplayModalFunc={props.setDisplayModalFunc}
      />
    ));
  };

  return (
    <ul className="photo-list">
      {renderPhotoListItems(props.photos)}
    </ul>
  );
};

export default PhotoList;
