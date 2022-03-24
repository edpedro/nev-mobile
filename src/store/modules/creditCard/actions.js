import types from './types'

export function getCards() {
  return { type: types.GET_CARDS }
}
export function setCards(payload) {
  return { type: types.SET_CARDS, payload }
}
export function getCard(id) {
  return { type: types.GET_CARD, id }
}
export function setCard(payload) {
  return { type: types.SET_CARD, payload }
}
export function registerCards(card) {
  return { type: types.REGISTER_CARD, card }
}
export function updateCard(card, id) {
  return { type: types.UPDATE_CARD, card, id }
}
export function getCardTrans(id) {
  return { type: types.GET_CARD_TRANS, id }
}
export function setCardTrans(payload) {
  return { type: types.SET_CARD_TRANS, payload }
}