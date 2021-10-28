import React, { useState } from "react";
import items from "./Todolist";

function App() {
  const [inputText, setText] = useState("");
  const [items, setItems] = useState([]);

  function handletext(event) {
    const newitem = event.target.value;
    setText(newitem);
  }

  function additems() {
    setItems((previtems) => [...previtems, inputText]);
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handletext} value={inputText} type="text" />
        <button onClick={additems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
