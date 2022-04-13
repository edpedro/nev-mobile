import types from './types'
import produce from 'immer'

const INITIAL_STATE = {
  user: {},
  loggedState: false,
  hideBal: false  
}

function users(state = INITIAL_STATE, action){
  switch(action.type){
    case types.SET_USER : {
      return produce(state, (draft) => {
        draft.user = { ...action.payload },
        draft.loggedState = true
      });
    }
    case types.SET_AUTH : {
      return produce(state, (draft) => {
        draft[action.key] = action.payload,
        draft.loggedState = true
      });
    }
    case types.LOGOUT_SUCCESS : {
      return produce(state, (draft) => {
        draft.loggedState = false
      });
    }
    case types.HIDE_BALANCE : {
      return produce(state, (draft) => {        
        draft.hideBal = action.payload
      });
    }
    default:
      return state
  }
}

export default users