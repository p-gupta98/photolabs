import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { useState } from 'react';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  
  const [favorites, setFavorites] = useState([]);



  const handleClick = (id) => {
    console.log("Photo Liked")
    if(favorites.includes(id)) {
      const filtered = favorites.filter((favorite) => {
        return (favorite !== id)
      })
      setFavorites(filtered);
    } else {
      const copy = [
        ...favorites, id
      ]
      setFavorites(copy)
    }
    

  }

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isLiked={favorites.length > 0} />
      <PhotoList photos={props.photos} favorites={favorites}handleClick={handleClick} displayModal={props.displayModal} setDisplayModalFunc={props.setDisplayModalFunc} />
    </div>
  );
};

export default HomeRoute;
