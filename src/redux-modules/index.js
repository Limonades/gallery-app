import { combineReducers } from 'redux';
import { selectReducer } from './albumSelect/reducer'

export const rootReducer = combineReducers({
  selectReducer,
});
