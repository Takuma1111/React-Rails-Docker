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
    console.log("検索結果のデータ")
    console.log(res.data)
    return res.data
  })
  .catch((e) => console.error(e))
}