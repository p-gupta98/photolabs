import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    console.log("Photo Liked")
    setIsLiked(!isLiked);
  }

  return (
    <>
    <div className="photo-list__item">
      <PhotoFavButton onClick={handleClick} isLiked={isLiked}/>
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource} />
    
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.sampleDataForPhotoListItem.profile} />
        <div>
          <div className="photo-list__user-info">{props.sampleDataForPhotoListItem.username}</div>

          <div className="photo-list__user-location">
            {props.sampleDataForPhotoListItem.location.city}, {props.sampleDataForPhotoListItem.location.country}
          </div>
        </div>
      </div>

    </div>  
    </>
  );
};

export default PhotoListItem;
