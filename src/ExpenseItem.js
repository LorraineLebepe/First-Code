import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList ({expenses}){
    return (
        <ul>
            {expenses.map((expense, index)=>(
                <ExpenseItem
                key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense}
                />
            ))}
        </ul>
    );
}

export default ExpenseList;

