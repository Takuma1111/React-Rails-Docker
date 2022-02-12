import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL, // データの取得状況
  postState: REQUEST_STATE.INITIAL,  // データの登録状況
  photosList: [],         
};

export const photosActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  POSTING: 'POSTING',
  POST_SUCCESS: 'POST_SUCCESS',
}

export const photosReducer = (state, action) => {
  switch (action.type) {
    case photosActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case photosActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        photosList: action.payload.photos,
      };
    case photosActionTypes.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING,
      };
    case photosActionTypes.POST_SUCCESS:
      return {
        ...state,
        postState: REQUEST_STATE.OK,
        
      };
    default:
      throw new Error();
  }
}
