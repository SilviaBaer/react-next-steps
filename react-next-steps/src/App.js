import './App.css';

import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

//app component is the stamm component renderd into single HTML page with help of react dom instructions
//components is = HTML elements

//LESSON 36. PASSING DATA VIA PROPS 
//it is possible to pass data and reuse components with the PROPS (attributes in  HTML) concept
//1/2 mapping components (attributes list)
//2/2 parameter = props (object that holds all the received values we get as attributes as properties = props in ExpenseItem.js)
//key value pair = (key = attribute name (title-amount-date)) + (value = value)
//instead of hardcoding each item I can reuse the component passing data via props 
//... that means that once the props are stated than it will loop in the array for each component and render it. 
