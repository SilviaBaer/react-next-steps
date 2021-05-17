import {useState} from "react";
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
 
    const filterChangeHandler = selectedYear => {
      console.log("Expenses.js")
      setFilteredYear(selectedYear)
    }

  return (
    <div>
      
<div className="expenses">
<div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </div>
      {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount}  />) }
      
    </div>

    </div>
      );
}

export default Expenses;

//comments
//fist hardcoded version
   //hardcoded const (now deprecated by props)
    //const expenseDate = new Date (2021, 2, 28);
    //const expenseTitle = "Car Insurance";
    //const expenseAmount = 25.98;
{/*OLD VERSION 
  17/5    
  now this items are mapped => creating an array from a another array passing the function 
      with the result that now we have a dynamic list that can also be updated dinamically (new item ...)
(continues in app.js, because the array that needs to be updated is hosted there)
      <ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount} 
      date={props.items[0].date}>
      </ExpenseItem>
      <ExpenseItem 
      title={props.items[1].title} 
      amount={props.items[1].amount} 
      date={props.items[1].date}>
      </ExpenseItem>
      <ExpenseItem
      title={props.items[2].title} 
      amount={props.items[2].amount} 
      date={props.items[2].date}>
      </ExpenseItem>
      <ExpenseItem
      title={props.items[3].title} 
      amount={props.items[3].amount} 
      date={props.items[3].date}>
      </ExpenseItem> */}
    //comments
