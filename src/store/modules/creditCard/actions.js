import types from './types'

export function getCards() {
  return { type: types.GET_CARDS }
}
export function setCards(payload) {
  return { type: types.SET_CARDS, payload }
}