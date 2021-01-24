import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoLists = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <>
      <div className="todo_style">
        <div>
          <span onClick={cutIt}>
            <DeleteIcon />
          </span>
          <h3 style={{ textDecoration: line ? "line-through" : "none" }}>
            {props.abc}
          </h3>
        </div>

        {/* <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          delete
        </button> */}
      </div>
    </>
  );
};

export default TodoLists;
