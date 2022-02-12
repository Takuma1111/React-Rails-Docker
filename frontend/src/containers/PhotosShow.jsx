import React, { Fragment,useReducer,useEffect } from 'react';

import { findPhotos } from '../api/photos';

import {
  initialState,
  photosActionTypes,
  photosReducer,
} from '../reducers/photos';

export const PhotoShow = ({
    match
  }) => {
  const [state, dispatch] = useReducer(photosReducer, initialState);
  useEffect(() => {
    dispatch({ type: photosActionTypes.FETCHING });
    findPhotos(match.params.photoId)
    .then((data) =>
      dispatch({
        type: photosActionTypes.FETCH_SUCCESS,
       payload: {
        photos: data
       }
       })
      )
  }, [])

  console.log("findした検索結果")
  console.log(state.photosList)
  return (
    <Fragment>
        <h1>動画のAPI情報一覧</h1>
        <p>{state.photosList.name}</p>
    </Fragment>
  )
}
