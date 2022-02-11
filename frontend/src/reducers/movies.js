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
        //ローディング中
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case moviesActionTypes.FETCH_SUCCESS:
        //成功した場合
      return {
        fetchState: REQUEST_STATE.OK,
        moviesList: action.payload.movies,
      };
      case moviesActionTypes.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING,
      };
    case moviesActionTypes.POST_SUCCESS:
      return {
        ...state,
        postState: REQUEST_STATE.OK,
        
      };
    default:
      throw new Error();
  }
}
