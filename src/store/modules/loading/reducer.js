import types from './types'
import produce from 'immer'

const INITIAL_STATE = {
  loading: false   
}

function loadings(state = INITIAL_STATE, action){
  switch(action.type){
    case types.SET_LOADING : {
      return produce(state, (draft) => {     
        draft.loading = action.payload
      });
    }   
    default:
      return state
  }
}

export default loadings