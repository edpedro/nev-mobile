import types from './types'
import produce from 'immer'

const INITIAL_STATE = {
  trans: {}, 
  showTrans: {},
  transRelease: {},
  transCard: {},
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
    case types.SET_TRANSACTIONS_RELEASE : {
      return produce(state, (draft) => {
         const { transactions, balance } = action.payload
      
        const result = transactions.filter((item) => { return item.operation === "conta"})

        draft.transRelease = {result, balance }
      });
    }
    case types.SET_TRANSACTIONS_CARD : {
      return produce(state, (draft) => {
         const { transactions, balance } = action.payload
      
        const result = transactions.filter((item) => { return item.operation === "cartao"})

        draft.transCard = { result }
      });
    }
    default:
      return state
  }
}

export default transactions