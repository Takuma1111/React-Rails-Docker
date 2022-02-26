import React, { Fragment,useReducer,useEffect } from 'react';
import { Link } from "react-router-dom";
import { fetchSounds } from '../api/sounds';
import styled from 'styled-components';


import {
  initialState,
  soundsActionTypes,
  soundsReducer,
} from '../reducers/sounds';

const SoundsContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 30%;
  width: 70%;

`;

const Box = styled.div`
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #777777;
  background: white;
  border-top: solid 5px #777777;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
`;
const Title = styled.h1`
font-family:"MS Pゴシック",sans-serif;
`;


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

    <Title>
      <center><h1>投稿された音楽作品一覧</h1></center>
    </Title> 
  <SoundsContentsList>       
  {
  state.soundsList.map((sound,index) =>
  <Link to={`/sounds/${sound.id}`} key={index} style={{ textDecoration: 'none' }}>

  <Box>
    <center>
      <p>{sound.name}</p>
      <h1>▶︎</h1>
      <audio controls src={sound.url} width="350" height="300"></audio>
    </center>
  </Box>
  </Link>
  )

  }
</SoundsContentsList>       
</Fragment>
  )
}
