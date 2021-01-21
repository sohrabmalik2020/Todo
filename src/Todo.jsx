import React, { useState } from "react";
import TodoLists from "./TodoLists";

const Todo = () => {
  const [input, setInput] = useState("");
  const [inputStr, setinputStr] = useState([]);
  const inputEvent = (e) => {
    setInput(e.target.value);
  };

  const addList = () => {
    setinputStr((preval) => {
      return [...preval, input];
    });
    setInput("");
  };

  const deleteItems = (id) => {
    console.log("item is deleted");
    setinputStr((preval) => {
      return preval.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="App">
        <h1>Todo ListS</h1>
        <div>
          <input
            value={input}
            type="text"
            className="input"
            onChange={inputEvent}
          />
          <button onClick={addList}>add</button>
        </div>
        <ol>
          {inputStr.map((allItems, idx) => {
            return (
              <TodoLists
                abc={allItems}
                key={idx}
                id={idx}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Todo;
