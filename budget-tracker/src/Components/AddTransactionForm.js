import React from "react";

const AddTransactionForm = () => {
    return (
        <form>
            <div id='transactionCatagoryInput'>
                <label htmlFor='category'>Category</label>
                <input 
                    required='required'
                    type='text' 
                    id='name'
                />
            </div>
            <div id="transactionValueInput">
                <label htmlFor='value'>Amount</label>
                <input 
                required='required'
                type='text'
                id='value'
                />
            </div>
            <div id="transactionSubmitButton">
                <button type="submit">Save</button>
            </div>
        </form>
    );
};

export default AddTransactionForm;