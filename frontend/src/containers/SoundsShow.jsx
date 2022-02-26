import React, { Fragment,useReducer,useEffect } from 'react';
import styled from 'styled-components';
import { findSounds } from '../api/sounds';

import {
  initialState,
  soundsActionTypes,
  soundsReducer,
} from '../reducers/sounds';

const Under = styled.h1 `
  border-bottom: solid 2px gray;
  margin-right: 20%;
  margin-left: 20%;
  font-family:inherit;
  font-size: 35px;
  font-weight: 700;
  word-break: break-all;
  color: #777777;
`;

const SoundsContentsList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
  padding-right: 10%;
  padding-left: 10%;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
`;

const ExplainContent = styled.p `
    padding-top: 5%;
    padding-bottom: 5%;
`;

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
        <center><h2><Under>{state.soundsList.name}</Under></h2></center>
        {
          <div>
            <center><h2>説明</h2>
             <p>{state.soundsList.text}</p>
           </center>
         </div>
        }
        {
          <ExplainContent>
            <center><audio controls src={state.soundsList.url} width="80%" height="650px"></audio></center>
          </ExplainContent>
        }
    </Fragment>
  )
}
