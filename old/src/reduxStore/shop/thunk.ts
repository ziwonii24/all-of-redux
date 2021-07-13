import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ShopAction } from './types';
import { getProductList } from '../../api/appleShop';
import { getAppleProductAsync } from './actions';

export function getAppleProductThunk(): ThunkAction<void, RootState, null, ShopAction> {
  return async (dispatch) => {
    const { request, success, failure } = getAppleProductAsync;
    dispatch(request());
    try {
      const productList = await getProductList();
      dispatch(success(productList));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
