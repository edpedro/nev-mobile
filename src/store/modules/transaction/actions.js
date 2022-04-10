import types from './types'

export function getTransactions() {
  return { type: types.GET_TRANSACTIONS }
}
export function getTransactionsRelease(month) {
  return { type: types.GET_TRANSACTIONS_RELEASE, month }
}
export function setTransactions(payload) {
  return { type: types.SET_TRANSACTIONS, payload }
}
export function setTransactionsRelease(payload) {
  return { type: types.SET_TRANSACTIONS_RELEASE, payload }
}
export function setTransactionsCard(payload) {
  return { type: types.SET_TRANSACTIONS_CARD, payload }
}
export function registerTransaction(transaction) {
  return { type: types.REGISTER_TRANSACTIONS, transaction }
}

export function getShowTransaction(id) {
  return { type: types.GET_SHOW_TRANSACTIONS, id }
}

export function setShowTransaction(payload) {
  return { type: types.SET_SHOW_TRANSACTIONS, payload }
}

export function updateTransaction(transaction, id) {
  return { type: types.UPDATE_TRANSACTION, transaction, id }
}

export function deleteTransaction(id) {
  return { type: types.DELETE_TRANSACTION, id }
}