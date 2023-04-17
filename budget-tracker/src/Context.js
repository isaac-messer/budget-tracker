import {createContext, useReducer, } from 'react';
// import BudgetReducer from './Reducer.js'

const BudgetReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
        default:
            return state;
    }
};



const initialState = {
    income: 1500,
    transactions: [
        {category: 'Food', amount: 20, id: crypto.randomUUID()},
        {category: 'Gas', amount: 50, id: crypto.randomUUID()},
        {category: 'Store', amount: 130, id: crypto.randomUUID()},
    ]
};

export const BudgetContext = createContext();

export const BudgetProvider = (prop) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState);

    return (
        <BudgetContext.Provider
            value={{
                transactions: state.transactions,

                balance: state.balance,
                income: state.income,
                expense: state.expense,

                category: state.category,
                amount: state.amount,

                dispatch,
            }}
        >   {prop.children}    
        </BudgetContext.Provider>
    )
}