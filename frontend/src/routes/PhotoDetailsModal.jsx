import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const handleClick = function() {
    props.updateToFavPhotoIds(props.selectedPhoto.id);
  }
  
    return (
      props.displayModal && (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={props.onClosePhotoDetailsModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <PhotoFavButton onClick={handleClick} isLiked={props.favorites && props.favorites.includes(props.selectedPhoto.id)}/>
        <img className="photo-details-modal__image" src={props.selectedPhoto.urls.full} alt={props.selectedPhoto.description} />
        
        <div>
            <div className="photo-list__user-details">
              <img className="photo-list__user-profile" src={props.selectedPhoto.user.profile} />
              <div className="photo-list__user-info">{props.selectedPhoto.user.username}</div>
              <div className="photo-list__user-location">
                {props.selectedPhoto.location.city}, {props.selectedPhoto.location.country}
              </div>              
            </div>
        </div>
        <div className="photo-details-modal__header">
          Similar Photos
        </div>
        <PhotoList  photos={Object.values(props.selectedPhoto.similar_photos)} updateToFavPhotoIds={props.updateToFavPhotoIds} favorites={props.favorites}/>  
      </div>
      )
    )
  }
  


export default PhotoDetailsModal;
