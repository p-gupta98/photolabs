import React from "react";
import { useState, useReducer } from "react";
import { useEffect } from "react";


/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload.id] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favorites: state.favorites.filter(favorite => favorite != action.payload.id) };
      
    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload.photoData};  
    
    case ACTIONS.SET_TOPIC_DATA:
      return {...state, topicData: action.payload.topicData};

    // case ACTIONS.GET_PHOTOS_BY_TOPICS:
    //   return { ...state, photosByTopicsData: action.payload.photosByTopicsData };
      
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo }  

    case ACTIONS.SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload.topic }
      
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayModal: !state.displayModal };  
    
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}  


function useApplicationData() {

  const initialState = {
    displayModal: false,
    favorites: [],
    selectedPhoto: null,
    selectedTopic: null,
    photoData: [],
    topicData: [],
    photosByTopicsData: [],
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)


  const favPhotoAdded = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id }});
  }

  const favPhotoRemoved = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id }});
  }

  const setPhotoData = (photoData) => {
    dispatch( {type: ACTIONS.SET_PHOTO_DATA, payload: {photoData}} );
  }

  const setTopicData = (topicData) => {
    dispatch( { type: ACTIONS.SET_TOPIC_DATA, payload: {topicData} } )
  }

  const getPhotosByTopics = (photosByTopicsData) => {
    dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: {photoData: photosByTopicsData}})

  }
  
  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: {photo} });
  }

  const selectTopic = (topic) => {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: {topic} });
  }

  const displayPhotoDetails = () => {
    dispatch( { type: ACTIONS.DISPLAY_PHOTO_DETAILS});
  }

//Sets the select photo to that particular photo: this is the reducer dispatch function
  const setSelectedPhoto = (photo) => {
      // setState((prev) => ({ ...prev, selectedPhoto: photo }));
      selectPhoto(photo);
  };

  const onClosePhotoDetailsModal = () => {
      // setState((prev) => ({ ...prev, displayModal: !prev.displayModal }));
      displayPhotoDetails();
  };

  
//This is the onClick function which calls the dispatch function
  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    // setDisplayModal(true);
    displayPhotoDetails();
  };

  const onTopicSelect = (topic) => {
    selectTopic(topic);
  }
  
  
  
  const updateToFavPhotoIds = (id) => {
    if(state.favorites.includes(id)) {
     
      // const filtered = state.favorites.filter((favorite) => {
      //   return (favorite !== id)
      // })
      // setFavorites(filtered);
      favPhotoRemoved(id);
    } else {
      // const copy = [
      //   ...state.favorites, id
      // ]
      // setFavorites(copy)
     
      favPhotoAdded(id);
      
    }
    
  }

  useEffect(() => {
    fetch('/api/photos')
    .then((res) => res.json())
    .then(data => {
      setPhotoData(data)
    }) 
  }, [])

  useEffect(() => {
    fetch('/api/topics')
    .then((res) => res.json())
    .then(data => {
      setTopicData(data)
    }) 
  }, [])

  useEffect(() => {

    if(state.selectedTopic) {
      fetch(`api/topics/photos/${state.selectedTopic}`)
      .then((res) => res.json())
      .then(data => {
        getPhotosByTopics(data)
      }) 
    }
  }, [state.selectedTopic])
  

  const applicationData = {
    state,
    updateToFavPhotoIds,
    setSelectedPhoto,
    onClosePhotoDetailsModal,
    onPhotoSelect,
    onTopicSelect,
    photos: state.photoData,
    topics: state.topicData
  };

  return applicationData;

}


export default useApplicationData;