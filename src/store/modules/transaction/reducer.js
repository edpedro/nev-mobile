import types from './types'
import produce from 'immer'

const INITIAL_STATE = {
  trans: {}, 
}

function transactions(state = INITIAL_STATE, action){
  switch(action.type){
    case types.SET_TRANSACTIONS : {
      return produce(state, (draft) => {
        draft.trans = action.payload 
      });
    }
    default:
      return state
  }
}

export default transactions