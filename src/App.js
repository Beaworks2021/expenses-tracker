import ExpenseInputs from "./component/ExpenseInputs";
import ExpenseHeader from "./component/ExpenseHeader";
import ExpenseList from "./component/ExpenseList";
import TotalExpense from "./component/TotalExpense";

function App() {
  return (
    <div className="App">
      <ExpenseHeader className="App_header" header="Expense Tracker" />
      <TotalExpense/>
      <ExpenseHeader className="App_header_b" header="All Expenses" />
      <ExpenseList />
      <ExpenseHeader className="App_header_c" header="Add Expenses"/>
      <ExpenseInputs />
    </div>
  );
}

export default App;
