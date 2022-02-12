import React, { Fragment,useReducer,useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchPhotos } from '../api/photos';

import {
  initialState,
  photosActionTypes,
  photosReducer,
} from '../reducers/photos';

export const Photos = () => {
  const [state, dispatch] = useReducer(photosReducer, initialState);
  useEffect(() => {
    dispatch({ type: photosActionTypes.FETCHING });
    fetchPhotos()
    .then((data) =>
      dispatch({
        type: photosActionTypes.FETCH_SUCCESS,
       payload: {
        photos: data.photos
       }
       })
      )
  }, [])

  console.log(state.photosList)
  return (
    <Fragment>

    <h1>動画のAPI情報一覧</h1>
    {
state.photosList.map((photo,index) =>
<Link to={`/photos/${photo.id}`} key={index} style={{ textDecoration: 'none' }}>

<div>

  <p>{photo.name}</p>
  <p>{photo.url}</p>
</div>
</Link>
  )

    }
</Fragment>
  )
}
