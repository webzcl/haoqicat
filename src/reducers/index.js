import { combineReducers } from 'redux';
import accountReducer from './account.js';
import catReducer from './cat.js';

const rootReducer = combineReducers({
  account: accountReducer,
  cat: catReducer
});

export default rootReducer;
