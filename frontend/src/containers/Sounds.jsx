import React, { Fragment,useReducer,useEffect } from 'react';
import { Link } from "react-router-dom";
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
state.soundsList.map((sound,index) =>
<Link to={`/sounds/${sound.id}`} key={index} style={{ textDecoration: 'none' }}>

<div>

<p>{sound.name}</p>
<p>{sound.url}</p>
</div>
</Link>
)

}
</Fragment>
  )
}
