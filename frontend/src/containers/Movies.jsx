import React, { Fragment,useReducer,useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { fetchMovies } from '../api/movies';

import {
  initialState,
  moviesActionTypes,
  moviesReducer,
} from '../reducers/movies';

const MoviesContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin: 50px;
  margin-right: 50px;
  margin-left:  50px;

`;

const Title = styled.h1`
font-family:"MS Pゴシック",sans-serif;

`;

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
      
     <Title>
      <h1>投稿された映像作品一覧</h1>
    </Title> 
    <MoviesContentsList>       
    {
      state.moviesList.map((movie,index) =>
        <Link to={`/movies/${movie.id}`} key={index} style={{ textDecoration: 'none' }}>
        <div>
          <p>{movie.name}</p>
          
          <video src={movie.url}  width="350" height = "300" />
        </div>
        </Link>
      )
    }
  </MoviesContentsList>       
</Fragment>
  )
}
