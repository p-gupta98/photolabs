import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { useState } from 'react';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    console.log("Photo Liked")
    setIsLiked(prevIsLiked => !prevIsLiked);
  }

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} isLiked={isLiked} handleClick={handleClick}/>
      <PhotoList photos={props.photos} isLiked={isLiked} handleClick={handleClick}/>
    </div>
  );
};

export default HomeRoute;
