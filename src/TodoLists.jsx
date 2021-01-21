import React from "react";

const TodoLists = (props) => {
  return (
    <>
      <div className="main">
        <h3>{props.abc}</h3>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default TodoLists;
