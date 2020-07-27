import React from "react";
import "./Todos.css";

const todos = (props) => {
  var todosList = props.todosList.map((value, index) => {
    return (
      <li
        onDoubleClick={(event) => {
          props.onTap(index);
          event.preventDefault();
        }}
        className="todo-item"
        key={index}
      >
        <input
          value={value}
          onChange={(event) => props.onChange(index, event.target.value)}
          onDoubleClick={(event) => {
            props.onTap(index);
            event.preventDefault();
          }}
        />
      </li>
    );
  });
  return <ul className="todos-list">{todosList}</ul>;
};

export default todos;
