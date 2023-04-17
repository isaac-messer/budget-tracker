import { useEffect, useState, useRef } from 'react';
import React from 'react';
import './App.css';
import Balance from './Components/BalanceInfo.js'
import Income from './Components/IncomeInfo.js'
import Expenses from './Components/ExpensesInfo';





function App() {
  return (
    <div id="container">
      <div id="header">
      </div>
      <div id="budgetBalance">
        <div id="budgetBreakDown">
        </div>
      </div>
      <div id="history">
      </div>
      <div id="addTransaction">
      </div>
    </div>
  );
};

export default App;
