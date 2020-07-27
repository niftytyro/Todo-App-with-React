import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import TodosComponent from "./Components/Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <div className="todo-container">
          <TodosComponent></TodosComponent>
        </div>
      </div>
    );
  }
}

export default App;
