import types from './types'
import produce from 'immer'

const INITIAL_STATE = {
  cards: {},  
}

function users(state = INITIAL_STATE, action){
  switch(action.type){
    case types.SET_CARDS : {
      return produce(state, (draft) => {
        draft.cards = action.payload 
      });
    }    
    default:
      return state
  }
}

export default users