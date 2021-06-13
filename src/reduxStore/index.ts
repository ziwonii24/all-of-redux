import { combineReducers } from 'redux';
import counter from './counter';
import shop from './shop';

const rootReducer = combineReducers({
  counter,
  shop,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
