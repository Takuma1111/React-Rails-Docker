import axios from 'axios';
import { movies ,movieIndex} from '../urls/index'

export const fetchMovies =() => {
  return axios.get(movies)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}

export const findMovies =(movieId) => {
  return axios.get(movieIndex(movieId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}