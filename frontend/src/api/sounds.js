import axios from 'axios';
import { sounds } from '../urls/index'

export const fetchSounds =() => {
  return axios.get(sounds)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
