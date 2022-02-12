import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL, // データの取得状況
  postState: REQUEST_STATE.INITIAL,  // データの登録状況
  soundsList: [],         
};

export const soundsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  POSTING: 'POSTING',
  POST_SUCCESS: 'POST_SUCCESS',
}

export const soundsReducer = (state, action) => {
  switch (action.type) {
    case soundsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case soundsActionTypes.FETCH_SUCCESS:
      console.log(action.payload.sounds)
      return {
        fetchState: REQUEST_STATE.OK,
        soundsList: action.payload.sounds,
      };
    case soundsActionTypes.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING,
      };
    case soundsActionTypes.POST_SUCCESS:
      return {
        ...state,
        postState: REQUEST_STATE.OK,
        
      };
    default:
      throw new Error();
  }
}
