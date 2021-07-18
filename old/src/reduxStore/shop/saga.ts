import { call, put, takeEvery } from 'redux-saga/effects';
import { getAppleProductAsync, GET_PRODUCT_LIST } from './actions';
import { getProductList, TProduct } from '../../api/appleShop';

function* getAppleProductSaga(action: ReturnType<typeof getAppleProductAsync.request>) {
  // FIXME:
  // try {
  //   const productList: TProduct[] = yield call(getProductList, action.payload);
  //   yield put(getAppleProductAsync.success(productList));
  // } catch (e) {
  //   yield put(getAppleProductAsync.failure(e));
  // }
}

export function* shopSaga() {
  yield takeEvery(GET_PRODUCT_LIST, getAppleProductSaga);
}
