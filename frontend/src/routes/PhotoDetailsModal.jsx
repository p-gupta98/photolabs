import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  
    return (
      props.displayModal && (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={props.setDisplayModalFunc}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div>
          <img className="photo-list__image" src={props.selectedPhoto.urls.full} />
        </div>
      </div>
      )
    )
  }
  


export default PhotoDetailsModal;
