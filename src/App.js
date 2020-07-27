import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import TodosComponent from "./Components/Todos";

class App extends Component {
  state = {
    tasks: ["Task #1", "Task #2", "Task #3", "Task #4", "Task #5"],
  };

  deleteTask = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
  };

  render() {
    let todosList = [...this.state.tasks];
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <div className="todo-container">
          <TodosComponent
            onTap={this.deleteTask}
            todosList={todosList}
          ></TodosComponent>
        </div>
      </div>
    );
  }
}

export default App;
