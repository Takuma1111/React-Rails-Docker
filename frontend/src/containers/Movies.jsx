import React, { Fragment,useReducer,useEffect } from 'react';
import { Link } from "react-router-dom";
  
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
      
    <h1>動画のAPI情報一覧</h1>
    {
state.moviesList.map((movie,index) =>
<Link to={`/movies/${movie.id}`} key={index} style={{ textDecoration: 'none' }}>

<div>
 
  <p>{movie.name}</p>
  <p>{movie.url}</p>
</div>
</Link>
  )
    
    }
</Fragment>
  )
}
