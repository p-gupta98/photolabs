import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <>
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource}/>
    </div>
    <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={props.sampleDataForPhotoListItem.profile} />
      <p className="photo-list__user-info">{props.sampleDataForPhotoListItem.username}</p>
      <p className="photo-list__user-location">{props.sampleDataForPhotoListItem.location.city}</p> 
      <p>{props.sampleDataForPhotoListItem.country}</p>
    </div>
    </>
  );
};

export default PhotoListItem;
