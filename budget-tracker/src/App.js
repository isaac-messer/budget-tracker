import './App.css';

import { useEffect, useState, useRef } from 'react';

function App() {
  const [balance, setBalance] = useState(0.00);
  const [incomeBalance, setIncomeBalance] = useState(0.00);
  const [expenceBalance, setExpenceBalance] = useState(0.00);

  // const [transactionType, setTransactionType] = useState('');
  const inputRef = useRef(null);

  function formSubmit() {
    let amountValue = Number(inputRef.current.value);
    
    if (amountValue > 0) {
      setBalance(amountValue + balance);
      setIncomeBalance(amountValue + incomeBalance);

    } else if (amountValue < 0) {
      setBalance(amountValue + balance);
      setExpenceBalance(Math.abs(amountValue + expenceBalance));

    } else if (amountValue === 0) {
      setBalance(amountValue + balance);

    } else {
      alert(`That is not a valid input.`)

    };
    // setBalance(amountValue + balance); 
    inputRef.current.value = null;
  }


  return (
    <>
      <div id="header">
        <h1>Budget Tracker</h1>
      </div>

      <div id="budgetBalance">
        <h2>Your Balance</h2>
        <h2>${balance}</h2>
        <div id="budgetBreakDown">
          <h3>Income</h3>
          <p>+${incomeBalance}</p>
          <h3>Expence</h3>
          <p>-${expenceBalance}</p>
        </div>
      </div>

      <div id="addTransaction">
        <input 
          ref={inputRef} 
          type="text" 
          id='amountInput' 
          name='Amount' 
        />
        <button onClick={formSubmit}>Add Transaction</button>
      </div>
    </>
  )
}

export default App;
