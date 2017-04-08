import { combineReducers } from 'redux';
import accountReducer from './account.js';
import catReducer from './cat.js';
import purchaseReducer from './purchase.js';

const rootReducer = combineReducers({
  account: accountReducer,
  cat: catReducer,
  purchaseStore:purchaseReducer
});

export default rootReducer;
