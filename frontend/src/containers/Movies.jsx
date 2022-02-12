import React, { Fragment,useReducer,useEffect } from 'react';

import { fetchMovies } from '../api/movies';

import {
  initialState,
  moviesActionTypes,
  moviesReducer,
} from '../reducers/movies';

export const Movies = () => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  useEffect(() => {
    dispatch({ type: moviesActionTypes.FETCHING });
    fetchMovies()
    .then((data) =>
      // console.log(data),
      dispatch({
        type: moviesActionTypes.FETCH_SUCCESS,
       payload: {
         movies: data.movies
       }
       })
      )
  }, [])

  console.log(state.moviesList)
  return (
    <Fragment>
        <h1>ff</h1>
        {
    state.moviesList.map(movie =>
    <div>
      <p>{movie.name}</p>
      <p>{movie.text}</p>
      <p>{movie.url}</p>
   </div>
  )
}
    </Fragment>
  )
}
