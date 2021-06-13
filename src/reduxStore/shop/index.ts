/** ducks pattern */
// import { createAsyncAction, ActionType, createReducer } from 'typesafe-actions';
// import { TProduct, TApiError } from '../../api/appleShop';

// // action type
// const GET_PRODUCT_LIST = 'apple/GET_PRODUCT_LIST' as const;
// const GET_PRODUCT_LIST_SUCCESS = 'apple/GET_PRODUCT_LIST_SUCCESS' as const;
// const GET_PRODUCT_LIST_ERROR = 'apple/GET_PRODUCT_LIST_ERROR' as const;

// // action
// export const getAppleProductAsync = createAsyncAction(
//   GET_PRODUCT_LIST,
//   GET_PRODUCT_LIST_SUCCESS,
//   GET_PRODUCT_LIST_ERROR,
// )<undefined, TProduct[], TApiError>();

// // type of action
// type ShopAction =
//   | ActionType<typeof GET_PRODUCT_LIST>
//   | ActionType<typeof GET_PRODUCT_LIST_SUCCESS>
//   | ActionType<typeof GET_PRODUCT_LIST_ERROR>;

// // type of state
// type ShopState = {
//   product: {
//     loading: boolean;
//     error: TApiError | null;
//     data: TProduct[] | null;
//   };
// };

// // initial state
// const initialState: ShopState = {
//   product: {
//     loading: false,
//     error: null,
//     data: null,
//   },
// };

// // reducer
// const shop = createReducer<ShopState, ShopAction>(initialState, {
//   [GET_PRODUCT_LIST]: (state: any) => ({
//     ...state,
//     product: {
//       loading: true,
//       error: null,
//       data: null,
//     },
//   }),
//   [GET_PRODUCT_LIST_SUCCESS]: (state: any, action: { payload: any }) => ({
//     ...state,
//     product: {
//       loading: false,
//       error: null,
//       data: action.payload,
//     },
//   }),
//   [GET_PRODUCT_LIST_ERROR]: (state: any, action: { payload: any }) => ({
//     ...state,
//     product: {
//       loading: false,
//       error: action.payload,
//       data: null,
//     },
//   }),
// });

// export default shop;

/** seperate */
export { default } from './reducer';
export * from './actions';
export * from './types';
export * from './thunk';
export * from './saga';
