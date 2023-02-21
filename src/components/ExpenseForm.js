import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  HandleSubmit,
}) => {
  return;
  <form>
    <div className="form-center">
      <div className="form-group">
        <label htmlFor="charge">charge</label>
        <input
          type="text"
          className="form-control"
          id="charge"
          name="charge"
          placeholder="example rent"
          value={charge}
          onChange={handleCharge}
        />
      </div>
    </div>
    <div className="form-center">
      <div className="form-group">
        <label htmlFor="amount">amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          placeholder="example 100"
          value={amount}
        />
      </div>
    </div>
    <button type="submit" className="btm">
      Submit <MdSend className="btn-icon" />
    </button>
  </form>;
};

export default ExpenseForm;
