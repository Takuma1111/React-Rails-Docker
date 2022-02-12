import axios from 'axios';
import { movies ,movieIndex} from '../urls/index'

export const fetchMovies =() => {
  return axios.get(movies)
  .then(res => {
    console.log('テスト');
    return res.data
  })
  .catch((e) => console.error(e))
}

export const findMovies =(movieId) => {
  return axios.get(movieIndex(movieId))
  .then(res => {
    console.log("検索結果のデータ")
    console.log(res.data)
    return res.data
  })
  .catch((e) => console.error(e))
}