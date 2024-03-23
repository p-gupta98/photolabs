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
        <div className='photo-details-modal__top-bar'>  
          <img className="photo-details-modal__image" src={props.selectedPhoto.urls.full} alt={props.selectedPhoto.description}></img>
        </div>   
          <div>
            <div className="photo-details-modal__photographer-details">
              <img className="photo-details-modal__photographer-profile" src={props.selectedPhoto.user.profile} />
              <div>
                <div className="photo-details-modal__photographer-info">{props.selectedPhoto.user.username}</div>
              
                <div className="photo-details-modal__photographer-location">
                  {props.selectedPhoto.location.city}, {props.selectedPhoto.location.country}
                </div>
              </div>  
            </div>           
          </div>
         
          <div className="photo-details-modal__header">
            Similar Photos
          </div>
          <div className='photo-details-modal__images'>
            <PhotoList  photos={Object.values(props.selectedPhoto.similar_photos)} updateToFavPhotoIds={props.updateToFavPhotoIds} favorites={props.favorites}/>
          </div>
      </div>
      )
    )
  }
  


export default PhotoDetailsModal;
