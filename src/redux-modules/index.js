import { combineReducers } from 'redux';
import { selectReducer } from './albumSelect/reducer';
import { photoReducer } from './photosData/reducer';
import { photosSearchReducer } from './photosSearch/reducer';

export const rootReducer = combineReducers({
  selectReducer,
  photoReducer,
  photosSearchReducer,
});
