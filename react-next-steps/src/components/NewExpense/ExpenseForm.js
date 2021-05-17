import {useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    //("") => empty string, nothing was entered yet
    //an alternative would be using the spread operator

    const titleChangeHandler = (event) => {
        //OLD! console.log(event.target.value)
        setEnteredTitle(event.target.value);
        //to ensure the value is somewhere stored => the state is safe somewhere
        //we will use this state later aniway
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

//onSubmit is a defaultbrowser behaviour = reload page too, which we do not want
//request is not sent, so the page is not going to load = preventDefault

    const expenseData = {
    title: enteredTitle, 
    amount: enteredAmount,
    date: new Date(enteredDate),
    //pointing at the three states
    
}   
//console.log(expenseData)
props.onSaveExpenseData(expenseData);
//these three functions are called after the form is submitted 
//in order to overwrite what the user wrote
//in this case an empty string (""), such as the initial default value (***TWO WAY BINDING***) 
setEnteredTitle("");
setEnteredAmount("");
setEnteredDate("")
}

    return(
        
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense</button>

            </div>
        </form>
    )
}; 

export default ExpenseForm;

//********************ON CHANGE EVENT****************** */
//gets triggered every time a change is detected
    //the next step is EXTRACTING the value from the event object 
    //in vanilla js the event object is there every time you listen to event in browser
    //browser will make sure we get the event object every time a change event occurs
    //target -> dom element -> list of props -> value => event.target.value

 //the next step is to STORE the value somewhere


// ***********************TWO WAY BINDING*********************************
//we do not just listen to changes but we also send back a new value after the form is submitted
//it basically a trick that clears the form fields after the submitting
//inside the html elements there are the value which send back the field to initial default state aka empty string ("")

// ***********************BOTTOM UP*********************************
//***BOTTOM UP */from children to parent 1/2
//added (props) to the const ExpenseForm (expected props)
//instead of console.log(expenseData) ... I am now executing the onsave 

//since we are now passing props there is no need to import function from child component