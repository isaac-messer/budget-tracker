import React from "react";

const TransactionItem = (prop) => {
    return (
        <li className="transactionItem">
            {prop.name}
            <div>
                ${prop.value}
            </div>
        </li>
    );
};

export default TransactionItem;