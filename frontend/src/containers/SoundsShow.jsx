import React, { Fragment,useReducer,useEffect } from 'react';

import { findSounds } from '../api/sounds';

import {
  initialState,
  soundsActionTypes,
  soundsReducer,
} from '../reducers/sounds';

export const SoundShow = ({
    match
  }) => {
  const [state, dispatch] = useReducer(soundsReducer, initialState);
  useEffect(() => {
    dispatch({ type: soundsActionTypes.FETCHING });
    findSounds(match.params.soundId)
    .then((data) =>
      dispatch({
        type: soundsActionTypes.FETCH_SUCCESS,
       payload: {
         sounds: data
       }
       })
      )
  }, [])

  console.log(state.soundsList)
  return (
    <Fragment>
        <h1>動画のAPI情報一覧</h1>
        <p>{state.soundsList.name}</p>
    </Fragment>
  )
}
