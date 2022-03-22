import { all } from 'redux-saga/effects'

import user from './user/sagas'
import creditCard from './creditCard/sagas'

export default function* rootSaga(){
  return yield all([user, creditCard])
}