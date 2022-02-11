import axios from 'axios';
import { movies } from '../urls/index'

export const fetchMovies =() => {
  return axios.get(movies)
  .then(res => {
    console.log(res.data)
    return res.data
  })
  .catch((e) => console.error(e))
}
