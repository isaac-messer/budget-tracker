import './App.css';

import { useEffect, useState, useRef } from 'react';


function App() {
  return (
    <>
      <div id="header">
        <h1>Budget Tracker</h1>
      </div>
      <div id="budgetBalance">
        <h2>Your Balance</h2>
        <h2>$</h2>
        <div id="budgetBreakDown">
          <h3>Income</h3>
          <p>+$</p>
          <h3>Expence</h3>
          <p>-$</p>
        </div>
      </div>
      <div id="history">
      </div>
      <div id="addTransaction">
      </div>
    </>
  );
};

export default App;
