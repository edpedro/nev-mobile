import types from './types'
import produce from 'immer'

const INITIAL_STATE = {
  cards: {},
  card: {},
  cardTrans: {},
  balanceCard: {
    balance: 0,
    expense: 0
  }  
}

function users(state = INITIAL_STATE, action){ 
  switch(action.type){
    case types.SET_CARDS : {
      return produce(state, (draft) => {
        draft.cards = action.payload  
        draft.balanceCard.balance = 0
        draft.balanceCard.expense = 0

        action.payload.forEach(element => {
          draft.balanceCard.balance += Number(element.limit)
          draft.balanceCard.expense += Number(element.cardBalance)
        });       
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