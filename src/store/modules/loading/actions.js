import types from './types'

export function loading(payload) {
  return { type: types.SET_LOADING, payload }
}
