import axios from 'axios';
import { sounds,soundIndex } from '../urls/index'

export const fetchSounds =() => {
  return axios.get(sounds)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}


export const findSounds =(soundId) => {
  return axios.get(soundIndex(soundId))
  .then(res => {
    console.log("検索結果のデータ")
    console.log(res.data)
    return res.data
  })
  .catch((e) => console.error(e))
}