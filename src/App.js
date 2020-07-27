import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import TodosComponent from "./Components/Todos";
import AddTodoComponent from "./Components/AddTodo";

class App extends Component {
  state = {
    tasks: [
      "Press the '+' button to add more tasks.",
      "Douple tap a task to delete a task.",
    ],
  };

  deleteTask = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
  };
  addTask = () => {
    const tasks = [...this.state.tasks];
    tasks.push("");
    this.setState({
      tasks: tasks,
    });
  };
  onTaskChange = (index, newTask) => {
    const tasks = [...this.state.tasks];
    tasks[index] = newTask;
    this.setState({ tasks: tasks });
  };

  render() {
    let todosList = [...this.state.tasks];
    return (
      <div className="App">
        <HeaderComponent />
        <div className="todo-container">
          <TodosComponent
            onTap={this.deleteTask}
            onChange={this.onTaskChange}
            todosList={todosList}
          />
          <AddTodoComponent onTap={this.addTask} />
        </div>
      </div>
    );
  }
}

export default App;
