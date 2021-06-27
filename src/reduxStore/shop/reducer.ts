import { createReducer } from 'typesafe-actions';
import { ShopAction, ShopState } from './types';
import { GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_ERROR } from './actions';

export const initialState: ShopState = {
  product: {
    loading: false,
    error: null,
    data: null,
  },
};

const shop = createReducer<ShopState, ShopAction>(initialState, {
  [GET_PRODUCT_LIST]: (state) => ({
    ...state,
    product: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_PRODUCT_LIST_SUCCESS]: (state, action) => ({
    ...state,
    product: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_PRODUCT_LIST_ERROR]: (state, action) => ({
    ...state,
    product: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default shop;
