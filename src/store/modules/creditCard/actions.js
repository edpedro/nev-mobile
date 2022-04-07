import types from './types'

export function getCards() {
  return { type: types.GET_CARDS }
}
export function setCards(payload) {
  return { type: types.SET_CARDS, payload }
}
export function getCard(id, month) {
  return { type: types.GET_CARD, id, month }
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
export function deleteCard(id) {
  return { type: types.DELETE_CARD, id }
}
export function getCardTrans(id, month) {
  return { type: types.GET_CARD_TRANS, id, month }
}
export function setCardTrans(payload) {
  return { type: types.SET_CARD_TRANS, payload }
}