import { combineReducers } from 'redux'

import users from './user/reducer'
import loadings from './loading/reducer'
import creditCards from './creditCard/reducer'

export default combineReducers({
  users,
  loadings,
  creditCards
})