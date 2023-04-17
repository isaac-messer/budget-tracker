import {createContext, useReducer, } from 'react';
import BudgetReducer from './Reducer.js'

const initialState = {
    budge: null,
    transactions: []
};

export const BudgetContext = createContext();

export const BudgetProvider = (prop) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    return (
        <BudgetContext.Provider
            value={{
                balance: state.balance,
                income: state.income,
                expenses: state.expenses,
                dispatch,
            }}
        >   {prop.children}    
        </BudgetContext.Provider>
    )
}