import axios from 'axios';
import { photos } from '../urls/index'

export const fetchPhotos =() => {
  return axios.get(photos)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
