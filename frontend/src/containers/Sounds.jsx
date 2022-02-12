import React, { Fragment,useReducer,useEffect } from 'react';

import { fetchSounds } from '../api/sounds';

import {
  initialState,
  soundsActionTypes,
  soundsReducer,
} from '../reducers/sounds';

export const Sounds = () => {
  const [state, dispatch] = useReducer(soundsReducer, initialState);
  useEffect(() => {
    dispatch({ type: soundsActionTypes.FETCHING });
    fetchSounds()
    .then((data) =>
      dispatch({
        type: soundsActionTypes.FETCH_SUCCESS,
       payload: {
         sounds: data.sounds
       }
       })
      )
  }, [])

  console.log(state.soundsList)
  return (
    <Fragment>
        <h1>動画のAPI情報一覧</h1>
        {
    state.soundsList.map(sound =>
    <div>
      <p>{sound.name}</p>
      <p>{sound.text}</p>
      <p>{sound.url}</p>
   </div>
  )
}
    </Fragment>
  )
}
