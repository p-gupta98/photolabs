import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { useState } from 'react';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  
  // const [favorites, setFavorites] = useState([]);
  
  // const handleClick = (id) => {
  //   console.log("Photo Liked")
  //   if(favorites.includes(id)) {
  //     const filtered = favorites.filter((favorite) => {
  //       return (favorite !== id)
  //     })
  //     setFavorites(filtered);
  //   } else {
  //     const copy = [
  //       ...favorites, id
  //     ]
  //     setFavorites(copy)
  //   }
    
  // }

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isLiked={props.favorites.length > 0} />
      <PhotoList 
      photos={props.photos} 
      favorites={props.favorites}
      updateToFavPhotoIds={props.updateToFavPhotoIds} 
      onPhotoSelect={props.onPhotoSelect}
      displayModal={props.displayModal} 
      onClosePhotoDetailsModal={props.onClosePhotoDetailsModal} 
      />
    </div>
  );
};

export default HomeRoute;
