import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {

  
    return (
      props.displayModal && (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={props.setDisplayModalFunc}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div>
          <PhotoList key={props.selectedPhoto.id} photo={props.selectedPhoto} />
        </div>
      </div>
      )
    )
  }
  


export default PhotoDetailsModal;
