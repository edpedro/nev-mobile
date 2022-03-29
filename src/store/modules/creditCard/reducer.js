import types from './types'
import produce from 'immer'

const INITIAL_STATE = {
  cards: {},
  cardsName: [],
  card: {},
  cardTrans: {},  
}

function users(state = INITIAL_STATE, action){

  switch(action.type){
    case types.SET_CARDS : {
      return produce(state, (draft) => {
        draft.cards = action.payload 
        
        for (let index = 0; index < action.payload.length; index++) {
          draft.cardsName.push(action.payload[index].bank)          
        }
      });
    }
    case types.SET_CARD : {
      return produce(state, (draft) => {
        draft.card = action.payload 
      });
    }
    case types.SET_CARD_TRANS : {
      return produce(state, (draft) => {
        draft.cardTrans = action.payload 
      });
    }        
    default:
      return state
  }
}

export default users