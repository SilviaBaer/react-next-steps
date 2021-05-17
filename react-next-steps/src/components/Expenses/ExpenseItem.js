import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

//component in react is just a JS function with the twist to return JSX code!!

//month-day-year are just so called so that it is rendered in a human understandable way (cfr. MDN)
//(props) need to be declared at the beginning of the function as explained in App.js


//on events always + function
//click calls the const clickHandler without () so it gets executed only when called and not automatically when the page loads!

//useState must be called inside the component!!!!!

//***SPIEGONE USESTATE HOOK ***/
//array destructuring technique from JS
//TITLE = pointing at value stored in the variable h2 TITLE = (props.title) = CURRENT STATE VALUE
//SETTITLE = function called to change the title = FUNCTION TO UPDATE THE CURRENT STATE VALUE 
//calling the function 
//- assign a new value to some var
//- it is managed by react and once it is called this var will receive a new value AND 
//AND THE COMPONENT FUNCTION WILL BE EXECUTED AGAIN!!! = reevaluated (only the component in which the hook is registered!!)
//it will draw the changes from the two states and render them on to the screen  

//in this case the function is called  4 times in the same way but each state is called indipendently
//react will give us back the last updated state of this component
//register state with the hook
//2 values = value itself + updating function
//call the updating function whenever the state should change
//use the first value whenever you want to use the state value to render the element in JSX
//REACT WILL DO THE REST AND REEXECUTE THE COMPONENT AND REEV THE JSX CODE WHENEVER THE STATE CHANGES
