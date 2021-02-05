import { useReducer, createContext } from 'react'
import { contextReducer } from './contextReducer'

const initialState = []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = (props) => {

  const [transactions, dispatch] = useReducer(contextReducer, initialState)

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <ExpenseTrackerContext.Provider value={{ 
      deleteTransaction, 
      addTransaction,
      transactions
    }}>
      {props.children}
    </ExpenseTrackerContext.Provider>
  )
}