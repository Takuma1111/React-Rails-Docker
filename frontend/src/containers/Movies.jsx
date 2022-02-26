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

  height: 30%;
  width: 70%;

`;

const Title = styled.h1`
font-family:"MS Pゴシック",sans-serif;
`;

const Box = styled.div`
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #777777;
  background: white;
  border-top: solid 5px #777777;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
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
    <center>
    <Title>
      <h1>投稿された映像作品一覧</h1>
    </Title> 
    <MoviesContentsList>       
    {
      state.moviesList.map((movie,index) =>
        <Link to={`/movies/${movie.id}`} key={index} style={{ textDecoration: 'none' }}>
        <Box>
          <center>
            <h3>- {movie.name} -</h3>
            <video src={movie.url}  width="350" height = "300" />
          </center>
        </Box>
        </Link>
      )
    }
  </MoviesContentsList>       
  </center>
</Fragment>
  )
}
