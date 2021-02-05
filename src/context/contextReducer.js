export const contextReducer = (state, action) => {
  let transactions

  switch(action.type) {
    case 'DELETE_TRANSACTION' :
      return transactions = state.filter((t) => t.id !== action.payload)
    case 'ADD_TRANSACTION':
      return transactions = [action.payload, ...state]
    default:
      console.log('action not defined')
      return state
  }
}