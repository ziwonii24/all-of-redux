import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter from './counter';
import shop from './shop';
import { shopSaga } from './shop';

const rootReducer = combineReducers({
  counter,
  shop,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([shopSaga()]);
}
