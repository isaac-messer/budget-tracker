import './App.css';

import { useEffect, useState, useRef } from 'react';

function App() {
  const [balance, setBalance] = useState(0.00);
  const [incomeBalance, setIncomeBalance] = useState(0.00);
  const [expenseBalance, setExpenseBalance] = useState(0.00);

  // const [transactionType, setTransactionType] = useState('');
  const inputCategoryRef = useRef(null);
  const inputAmountRef = useRef(null);

  function formSubmit(event) {
    event.preventDefault()
    let categoryInputValue = (inputCategoryRef.current.value);
    let amountInputValue = Number(inputAmountRef.current.value);
    
    console.log(categoryInputValue);
    console.log(amountInputValue);

    budgetTotals(amountInputValue);

    function budgetTotals(amount) {
      let transactionTotal = Number(amount.toFixed(2));

      if (transactionTotal > 0) {
        
        setBalance(transactionTotal + balance);
        setIncomeBalance(transactionTotal + incomeBalance);

      } else if (transactionTotal < 0) {
        setBalance(transactionTotal + balance);
        setExpenseBalance(Math.abs(transactionTotal) + expenseBalance);

      } else if (transactionTotal === 0) {
        setBalance(transactionTotal + balance);

      } else {
        alert(`That is not a valid input.`)

      };
    };

    function transactionHistory() {

    }
    

    inputCategoryRef.current.value = null;
    inputAmountRef.current.value = null;
  }


  return (
    <>
      <div id="header">
        <h1>Budget Tracker</h1>
      </div>

      <div id="budgetBalance">
        <h2>Your Balance</h2>
        <h2>${balance.toFixed(2)}</h2>
        <div id="budgetBreakDown">
          <h3>Income</h3>
          <p>+${incomeBalance.toFixed(2)}</p>
          <h3>Expence</h3>
          <p>-${expenseBalance.toFixed(2)}</p>
        </div>
      </div>

      <div id="addTransaction">
        <form>
          <input 
            ref={inputCategoryRef}
            type="text" 
            id='typeInput'
            name='category'
          />
          <input 
            ref={inputAmountRef} 
            type="text" 
            id='amountInput' 
            name='amount' 
          />
          <button onClick={formSubmit}>Add Transaction</button>
        </form>
        
      </div>
    </>
  )
}

export default App;
