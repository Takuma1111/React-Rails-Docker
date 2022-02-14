import React, { Fragment,useReducer,useEffect } from 'react';
import styled from 'styled-components';
import { findMovies } from '../api/movies';
import ReactPlayer from 'react-player'

import {
  initialState,
  moviesActionTypes,
  moviesReducer,
} from '../reducers/movies';

const MoviesContentsList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
  padding-right: 10%;
  padding-left: 10%;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
`;

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

const ExplainContent = styled.p `
    padding-top : 15%;
`;

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
        <center><h2><Under>{state.moviesList.name}</Under></h2></center>
        <MoviesContentsList>       
        {
              <ReactPlayer url={state.moviesList.url} width="80%" height = "650px" id="MainPlay" muted playing loop controls={true} />
        }
        {
          
            <div>
               <center><h2>説明</h2>
              <ExplainContent>
                <p>{state.moviesList.text}</p>
              </ExplainContent>
              </center>
            </div>
        }
        </MoviesContentsList>       
   </Fragment>
  )
}
