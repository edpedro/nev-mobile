import { all } from 'redux-saga/effects'

import user from './user/sagas'
import creditCard from './creditCard/sagas'
import transaction from './transaction/sagas'

export default function* rootSaga(){
  return yield all([user, creditCard, transaction])
}