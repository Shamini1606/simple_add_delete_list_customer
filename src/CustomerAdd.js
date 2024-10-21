import React from "react";
import { useState } from "react";

import {addCustomer as addCustomerAction} from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  //   const [customers, setCustomer] = useState([]);

  function addCustomer() {
    if (input) {
    //   setCustomer((previousState) => [...previousState, input]);
    //   console.log(customers);

    dispatch(addCustomerAction(input))
    setInput("");
    }
  }
  return (
    <>
      <div>
        <h3>Add New Customer</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <br />
        <button onClick={addCustomer}>Add</button>
      </div>
      {/* <CustomerView customers={customers}/> */}
    </>
  );
}
