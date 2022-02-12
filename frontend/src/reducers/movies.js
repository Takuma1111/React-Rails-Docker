import { REQUEST_STATE } from '../constants';

//APIの状態を表すfetchStateと取得したフード一覧が格納されるfoodsList
export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  postState: REQUEST_STATE.INITIAL,
  moviesList: [],
};

//取得中を表すFETCHINGと取得成功した状態のFETCH_SUCCESSの二つを定義
export const moviesActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

//foodsActionTypesによってstateを2種類返すようにしている
export const moviesReducer = (state, action) => {
  switch (action.type) {
      case moviesActionTypes.FETCHING:
        return {
          ...state,
          fetchState: REQUEST_STATE.LOADING,
        };
      case moviesActionTypes.FETCH_SUCCESS:
        console.log("リデューサー")
        console.log(action.payload.movies)
        return {
          fetchState: REQUEST_STATE.OK,
          moviesList: action.payload.movies
        };
    default:
      throw new Error();
  }
}
