import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = () => {
  return (
    <>
    <img src={sampleDataForPhotoListItem.imageSource}/>
    <img src={sampleDataForPhotoListItem.profile} />
    <p>{sampleDataForPhotoListItem.username}</p>
    <p>{sampleDataForPhotoListItem.location.city} {sampleDataForPhotoListItem.location.country}</p>
    </>
  );
};

export default PhotoListItem;
