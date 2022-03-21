import { combineReducers } from 'redux'

import userReduce from './user/reducer'
import loadingReducer from './loading/reducer'

export default combineReducers({
  userReduce,
  loadingReducer
})