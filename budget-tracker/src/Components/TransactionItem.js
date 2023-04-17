import React from "react";

const TransactionItem = (prop) => {
    return (
        <li className="transactionItem">
            {prop.category}
            <div>
                ${prop.amount}
            </div>
        </li>
    );
};

export default TransactionItem;