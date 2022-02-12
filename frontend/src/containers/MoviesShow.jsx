import React, { Fragment,useReducer,useEffect } from 'react';
import { Link } from "react-router-dom";

import { findMovies,replaceMovies } from '../api/movies';

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
      
        <h1>動画のAPI情報一覧</h1>
        {
    // state.moviesList.map((movie,index) =>

    // <Link to={{ // ★１解説します
    //     pathname: "/movies/" + movie.id,
    //     state: {id: movie.id},
    //     }}>{movie.id}{movie.name}</Link>

    //   )
    <p>{state.moviesList.name}</p>
        

        }
    </Fragment>
  )
}
