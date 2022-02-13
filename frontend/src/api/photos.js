import axios from 'axios';
import { photos,photoIndex } from '../urls/index'

export const fetchPhotos =() => {
  return axios.get(photos)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}

export const findPhotos =(photoId) => {
  return axios.get(photoIndex(photoId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}