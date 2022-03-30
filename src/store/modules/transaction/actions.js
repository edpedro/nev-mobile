import types from './types'

export function getTransactions() {
  return { type: types.SET_TRANSACTIONS }
}
export function setTransactions() {
  return { type: types.SET_TRANSACTIONS }
}
export function registerTransaction(transaction) {
  return { type: types.REGISTER_TRANSACTIONS, transaction }
}
