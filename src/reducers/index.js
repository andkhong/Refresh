import { combineReducers } from 'redux';

import uploadReducer from './uploadReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  uploadReducer,
  filterReducer
});
