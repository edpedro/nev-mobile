import { combineReducers } from 'redux'

import users from './user/reducer'
import loadings from './loading/reducer'
import creditCards from './creditCard/reducer'
import transactions from './transaction/reducer'

export default combineReducers({
  users,
  loadings,
  creditCards,
  transactions
})