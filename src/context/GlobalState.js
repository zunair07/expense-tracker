import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
 
//initial state
const initialState= {
    transactions : [
  
    ]
}
//create context

export const GlobalContext = createContext(initialState);

//provider 

export const GlobalProvider = ({children}) => {
  let [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions   
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function AddTransaction(transactions){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });
    }


    return(<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            AddTransaction
        }}>
            {children}
        </GlobalContext.Provider>);
    }

   