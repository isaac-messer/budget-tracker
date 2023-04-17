import React, { useContext, useState } from "react";
import { BudgetContext } from "../Context";
import { v4 as uuidv4 } from 'uuid';

const AddTransactionForm = () => {
    const { dispatch } = useContext(BudgetContext);

    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const transaction = {
            category: category,
            amount: parseInt(amount),
            id: uuidv4(),
        };

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });

    };

    return (
        <form onSubmit={onSubmit}>
            <div id='transactionCatagoryInput'>
                <label htmlFor='category'>Category</label>
                <input 
                    required='required'
                    type='text' 
                    id='name'
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
            </div>
            <div id="transactionValueInput">
                <label htmlFor='value'>Amount</label>
                <input 
                required='required'
                type='text'
                id='value'
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                />
            </div>
            <div id="transactionSubmitButton">
                <button type="submit">Save</button>
            </div>
        </form>
    );
};

export default AddTransactionForm;