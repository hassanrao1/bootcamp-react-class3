import React, { useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  let [counter, setCounter] = useState(1);
  let [morning, setMorning] = useState(false);

  return (
    <div className={`box ${morning ? "daylight" : "box"}`}>
      <h1>Good {morning ? "Morning" : "Night"}</h1>

      <Message counterUpdate={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setMorning(!morning)}>Update Day</button>
    </div>
  );
}

export default App;
