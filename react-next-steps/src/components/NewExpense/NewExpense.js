import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

//***BOTTOM UP */from children to parent 1/2
//onSaveExpenseData function that gets triggered when something happens inside the component aka 
//when the form is in the end submitted 
//the function expects to have this parameter = enteredExpenseData

//it continues now in the custom component FORM!!!