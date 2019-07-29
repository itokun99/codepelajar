import { combineReducers } from 'redux';
import http from './httpRequestReducer';
import authorize from './authorizeReducer';
import loading from './loadingReducer';

const reducer = combineReducers({
  http,
  authorize,
  loading
})

export default reducer;