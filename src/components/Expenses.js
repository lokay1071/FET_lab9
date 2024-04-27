import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("All");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    let filteredExpenses = props.expenses;

    if (filteredYear !== "All") {
        filteredExpenses = props.expenses.filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
        );
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selectedYear={filteredYear}
                    availableYears={getUniqueYears(props.expenses)}
                    onFilterChange={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses} />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

const getUniqueYears = (expenses) => {
    const years = new Set();
    expenses.forEach((expense) => {
        years.add(expense.date.getFullYear().toString());
    });
    return ["All", ...Array.from(years)];
};

export default Expenses;
