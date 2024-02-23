import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <>
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource}/>
    
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
