import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {



  return (
    <>
    <div className="photo-list__item">
      <PhotoFavButton onClick={props.handleClick} isLiked={props.isLiked}/>
      <img className="photo-list__image" src={props.photo.urls.regular} />
    
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} />
        <div>
          <div className="photo-list__user-info">{props.photo.user.username}</div>

          <div className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </div>
      </div>

    </div>  
    </>
  );
};

export default PhotoListItem;
