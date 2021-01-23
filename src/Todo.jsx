import React, { useState } from "react";
import TodoLists from "./TodoLists";

//<---material ui---->
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";

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
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <div>
            <input
              value={input}
              type="text"
              className="input"
              onChange={inputEvent}
            />
            <Button onClick={addList}>
              <AddIcon />
            </Button>
          </div>
          <ol>
            {inputStr.map((allItems, idx) => {
              return (
                <TodoLists
                  abc={allItems}
                  key={idx}
                  id={idx}
                  //onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
