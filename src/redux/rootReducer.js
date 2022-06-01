import {combineReducers} from '@reduxjs/toolkit';
import indicatorReducer from './slices/indicator';
import resourceReducer from './slices/resource';

const rootReducer = combineReducers({
  indicator: indicatorReducer,
  resource: resourceReducer,
});

export {rootReducer};
