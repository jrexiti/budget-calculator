import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 500 },
  { id: uuidv4(), charge: "credit cards", amount: 1200 },
];

function App() {
  // ************** state values **************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  //single expense
  const [charge, setCharge] = useState("");
  //single amount
  const [amount, setAmount] = useState("");

  //alert
  const [alert, setAlert] = useState({ show: false });
  // ************** functionality **************

  // handle charge function
  const handleCharge = (e) => {
    // console.log(`charge: ${e.target.value}`);
    setCharge(e.target.value);
  };

  //handle amount function
  const handleAmount = (e) => {
    // console.log(`amount: ${e.target.value}`);
    setAmount(e.target.value);
  };

  //handle Alert function
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  //handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(charge, amount);
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "item added" });
      setCharge("");
      setAmount("");
    } else {
    }
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
