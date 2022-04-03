import types from './types'
import produce from 'immer'

const INITIAL_STATE = {
  trans: {}, 
  showTrans: {},
}

function transactions(state = INITIAL_STATE, action){
  switch(action.type){
    case types.SET_TRANSACTIONS : {
      return produce(state, (draft) => {
        draft.trans = action.payload 
      });
    }
    case types.SET_SHOW_TRANSACTIONS : {
      return produce(state, (draft) => {
        draft.showTrans = action.payload 
      });
    }
    default:
      return state
  }
}

export default transactions