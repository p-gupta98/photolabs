import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span> <TopicList topics={props.topics}/></span>
      <span><FavBadge isLiked={props.isLiked} handleClick={props.handleClick} /></span>
    </div>
  )
}

export default TopNavigation;