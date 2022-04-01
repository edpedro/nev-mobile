import types from './types'

export function getTransactions() {
  return { type: types.GET_TRANSACTIONS }
}
export function setTransactions(payload) {
  return { type: types.SET_TRANSACTIONS, payload }
}
export function registerTransaction(transaction) {
  return { type: types.REGISTER_TRANSACTIONS, transaction }
}
