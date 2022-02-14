import React, { Fragment,useReducer,useEffect } from 'react';
import styled from 'styled-components';
import { findMovies } from '../api/movies';
import ReactPlayer from 'react-player'

import {
  initialState,
  moviesActionTypes,
  moviesReducer,
} from '../reducers/movies';



export const MovieShow = ({
    match
  }) => {

  const [state, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    dispatch({ type: moviesActionTypes.FETCHING });
    findMovies(match.params.moviesId)
    .then((data) =>
      dispatch({
        type: moviesActionTypes.FETCH_SUCCESS,
       payload: {
         movies: data
       }
       })
      )
  }, [])
  

  console.log("findした検索結果")
  console.log(state.moviesList)
  return (
    <Fragment>
        <h1>動画</h1>
        {
          <center>
            <div>
              <p>{state.moviesList.name}</p>
              <ReactPlayer url={state.moviesList.url} id="MainPlay" muted playing loop controls={true} />
            </div>
          </center>
        }
5    </Fragment>
  )
}
