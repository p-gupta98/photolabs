import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <>
    <img className="photo-list__item" src={props.sampleDataForPhotoListItem.imageSource}/>
    <img src={props.sampleDataForPhotoListItem.profile} />
    <p>{props.sampleDataForPhotoListItem.username}</p>
    <p>{props.sampleDataForPhotoListItem.location.city} {props.sampleDataForPhotoListItem.country}</p>
    </>
  );
};

export default PhotoListItem;
