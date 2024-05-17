import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {

        const value = event.target.value;

        if (value >= 20_000) {
            alert("The value cannot exceed " + currency + "20,000");
            setNewBudget(budget);
            return;
        }

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")            
        }

        setNewBudget(value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
