import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    console.log("Photo Liked")
    setIsLiked(prevIsLiked => !prevIsLiked);
  }

  return (
    <>
    <div className="photo-list__item">
      <PhotoFavButton onClick={handleClick} isLiked={isLiked}/>
      <img className="photo-list__image" src={props.sampleDataForPhotoList.urls.regular} />
    
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.sampleDataForPhotoList.user.profile} />
        <div>
          <div className="photo-list__user-info">{props.sampleDataForPhotoList.user.username}</div>

          <div className="photo-list__user-location">
            {props.sampleDataForPhotoList.location.city}, {props.sampleDataForPhotoList.location.country}
          </div>
        </div>
      </div>

    </div>  
    </>
  );
};

export default PhotoListItem;
