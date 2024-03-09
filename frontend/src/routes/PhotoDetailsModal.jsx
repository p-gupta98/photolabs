import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  // const handleClose = () => {
  //   console.log('Close modal');
  //   props.setDisplayModal(!props.displayModal);
  // }
  
    return (
      props.displayModal && (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={props.setDisplayModalFunc}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      )
    )
  }
  


export default PhotoDetailsModal;
