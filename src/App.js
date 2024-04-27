import React, { useState } from "react";
import Expenses from "./components/Expenses";
import expenses_data from "./data/expenses";
import ExpenseAddForm from "./components/ExpenseAddForm";
import "./css/App.css";

function App() {
    const [expenses, setExpenses] = useState(expenses_data);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
    };

    return (
        <div>
            <ExpenseAddForm onSaveExpenseData={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
