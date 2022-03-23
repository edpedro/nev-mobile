import types from './types'

export function getCards() {
  return { type: types.GET_CARDS }
}
export function setCards(payload) {
  return { type: types.SET_CARDS, payload }
}
export function registerCards(card) {
  return { type: types.REGISTER_CARD, card }
}
export function getCardTrans(id) {
  return { type: types.GET_CARD_TRANS, id }
}
export function setCardTrans(payload) {
  return { type: types.SET_CARD_TRANS, payload }
}