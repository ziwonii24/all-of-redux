import { createAsyncAction } from 'typesafe-actions';
import { TProduct, TApiError } from '../../api/appleShop';

export const GET_PRODUCT_LIST = 'apple/GET_PRODUCT_LIST' as const;
export const GET_PRODUCT_LIST_SUCCESS = 'apple/GET_PRODUCT_LIST_SUCCESS' as const;
export const GET_PRODUCT_LIST_ERROR = 'apple/GET_PRODUCT_LIST_ERROR' as const;

export const getAppleProductAsync = createAsyncAction(
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
)<undefined, TProduct[], TApiError>(); // redux-thunk
// )<string, TProduct[], TApiError>(); // redux-saga ?
