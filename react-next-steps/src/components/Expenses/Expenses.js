import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  } )

  //OPTION A = NO EXPENSES FOUND (JSX CODE)
  let expensesContent = <p>No expenses found.</p>

  //OPTION B = N EXPENSES FOUND (ARRAY OF ELEMENTS)
  if (filteredExpenses.length > 0) 
 {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}

  //THE OPTIONS A OR B ARE NOW DINAMICALLY RENDERED IN THE EXPENSES CONTENT VARIABLE
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
{expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;


//TERNARY OPERATION AND CONDITIONAL CONTENT
//TERNARY OPERATOR VERSION IS COOL but also a bit hard to read. 
//conditional operator works better here because they are two different indipendent conditions that can co-exist
//comments
//fist hardcoded version
   //hardcoded const (now deprecated by props)
    //const expenseDate = new Date (2021, 2, 28);
    //const expenseTitle = "Car Insurance";
    //const expenseAmount = 25.98;
