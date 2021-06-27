import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { TApiError, TProduct } from '../../api/appleShop';

export type ShopAction = ActionType<typeof actions>;

export type ShopState = {
  product: {
    loading: boolean;
    error: TApiError | null;
    data: TProduct[] | null;
  };
};
