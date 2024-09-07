import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

  function App(){
     const [expenses, setExpenses] = useState([]);

     const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses)=> [...prevExpenses, expense]);
     };

     return (
      <div className="App">
        <h1>Expenses Tracker</h1>
        <ExpenseForm onAddExpense = {addExpenseHandler}/>
        <ExpenseList expenses = {expenses}/>
      </div>
  );
}

export default App;
