import types from './types'

export function authUser(key, payload) {
  return { type: types.SET_AUTH, key, payload }
}
export function loginUser(user) {
  return { type: types.LOGIN_USER, user }
}
export function registerUser(user) {
  return { type: types.REGISTER_USER, user }
}
export function loginSucess(payload) {
  return { type: types.SET_USER, payload }
}
export function logout() {
  return { type: types.LOGOUT }
}
export function logoutSucess() {
  return { type: types.LOGOUT_SUCCESS }
}
export function hideBalance(payload) {
  return { type: types.HIDE_BALANCE, payload }
}