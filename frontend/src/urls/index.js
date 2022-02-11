// サーバーサイドで定義したURL文字列を返す定数をいくつか設定している
const DEFAULT_API_LOCALHOST = 'http://localhost:3001/'

export const sounds = `${DEFAULT_API_LOCALHOST}/sounds`
//引数を受け取ってそれを文字列と結合させ、返り値として返している
export const soundIndex = (soundId) =>
  `${DEFAULT_API_LOCALHOST}/sounds/${soundId}/`

export const photos = `${DEFAULT_API_LOCALHOST}/photos`
export const photoIndex = (photoId) =>
  `${DEFAULT_API_LOCALHOST}/photos/${photoId}/`

export const movies = `${DEFAULT_API_LOCALHOST}/movies`
export const movieIndex = (movieId) =>
    `${DEFAULT_API_LOCALHOST}/movies/${movieId}/`
  

