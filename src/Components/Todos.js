import React, { useState } from "react";
import "./Todos.css";

const todos = (props) => {
  const [clicked, setClicked] = useState(false);
  const duration = 500;
  let timer;

  const handleTap = (index) => {
    if (clicked) {
      setClicked(false);
      clearTimeout(timer);
      handleDoubleTap(index);
    } else {
      setClicked(true);
      timer = setTimeout(() => {
        setClicked(false);
      }, duration);
    }
  };

  const handleDoubleTap = (index) => {
    props.onTap(index);
  };

  var todosList = props.todosList.map((value, index) => {
    return (
      <li
        onDoubleClick={(event) => {
          props.onTap(index);
          event.preventDefault();
        }}
        onTap={handleTap(index)}
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
