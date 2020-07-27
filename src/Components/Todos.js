import React from "react";
import "./Todos.css";

const todos = (props) => {
  var todosList = props.todosList.map((value, index) => {
    return (
      <li onClick={() => props.onTap(index)} className="todo-item" key={index}>
        {value}
      </li>
    );
  });
  return <ul className="todos-list">{todosList}</ul>;
};

export default todos;
