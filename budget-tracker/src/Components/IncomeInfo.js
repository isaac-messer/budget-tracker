import React, { useContext } from "react";
import { BudgetContext } from "../Context";

const Income = () => {
    const { income } = useContext(BudgetContext);

    return (
        <div className="IncomeTracker">
            <span>Income: ${ income.toFixed(2) }</span>
        </div>
    );
};

export default Income;