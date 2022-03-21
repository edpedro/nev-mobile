import { combineReducers } from 'redux'

import users from './user/reducer'
import loadings from './loading/reducer'

export default combineReducers({
  users,
  loadings
})