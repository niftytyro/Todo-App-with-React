import React from "react";
import "./AddTodo.css";

const add_todo = (props) => {
  return (
    <button onClick={props.onTap} className="add-todo-item">
      +
    </button>
  );
};

export default add_todo;
