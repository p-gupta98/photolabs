import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, isLiked, handleClick }) => {
  return (
    <div className='fav-badge '>
      <FavIcon displayAlert={!isFavPhotoExist} isLiked={isLiked} handleClick={handleClick}/>
  
    </div>
  ) 
};

export default FavBadge;