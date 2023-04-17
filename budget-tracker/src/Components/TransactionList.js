import React from "react";
import TransactionItem from './TransactionItem.js'

const TransactionList = () => {
    const transactions = [
        {name: 'Food', value: 20, id: crypto.randomUUID()},
        {name: 'Gas', value: 50, id: crypto.randomUUID()},
        {name: 'Store', value: 130, id: crypto.randomUUID()},
    ];

    return (
        <ul key={crypto.randomUUID()} className="transactionList">
            {transactions.map((transactions) => (
                <TransactionItem 
                    key={transactions.id}
                    name={transactions.name}
                    value={transactions.value}
                    id={transactions.id}
                />
            ))}
        </ul>
    );
};

export default TransactionList;