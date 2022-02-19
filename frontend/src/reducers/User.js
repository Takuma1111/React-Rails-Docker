// import { REQUEST_STATE } from '../constants';

// //APIの状態を表すfetchStateと取得したフード一覧が格納されるfoodsList
// export const initialState = {
//   fetchState: REQUEST_STATE.INITIAL,
//   postState: REQUEST_STATE.INITIAL,
//   usersList: [],
// };

// //取得中を表すFETCHINGと取得成功した状態のFETCH_SUCCESSの二つを定義
// export const usersActionTypes = {
//   FETCHING: 'FETCHING',
//   FETCH_SUCCESS: 'FETCH_SUCCESS'
// }

// //foodsActionTypesによってstateを2種類返すようにしている
// export const usersReducer = (state, action) => {
//   switch (action.type) {
//       case usersActionTypes.FETCHING:
//         return {
//           ...state,
//           fetchState: REQUEST_STATE.LOADING,
//         };
//       case usersActionTypes.FETCH_SUCCESS:
//         console.log("userリデューサー")
//         console.log(action.payload.users)
//         return {
//           fetchState: REQUEST_STATE.OK,
//           usersList: action.payload.users
//         };
//     default:
//       throw new Error();
//   }
// }
