import "./Input.css";
import React, { useState } from "react";

const Input = props => {
  const [data, setData] = useState(null);
  function getData(e) {
    setData(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Your custom letter set:</h1>
      <h1>{data}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={getData} className="inputField" type="text" placeholder="Enter letters here, separate by commas" />
        <button onClick={props.inputData} value="Start">
          Start
        </button>
      </form>
    </div>
  );
};

export default Input;
