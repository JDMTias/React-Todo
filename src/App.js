import React from "react";
import './components/Todo.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      allTasks: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
      formValues: "",
    };
  }

  handleChange = (e) => {
    console.log(this.state);
    this.setState({
      ...this.state,
      formValues: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      task: this.state.formValues,
      id: new Date(),
      completed: false,
    };
    this.setState({
      ...this.state,
      allTasks: [...this.state.allTasks, newTask],
      formValues: "",
    });
  };

  onComplete = taskId => {
    this.setState({
      allTasks: this.state.allTasks.map(task =>{
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }

        } else {
          return task
        }
      })
    })

  }

  onClear= () => {
    this.setState({
      ...this.state,
      allTasks: this.state.allTasks.filter(task =>
        !task.completed
    )

  })
}

  render() {
    return (
      <div>
        <h1>My Todo's</h1>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          formValues={this.state.formValues}
        />
        <TodoList onClear={this.onClear} onComplete={this.onComplete}allTasks={this.state.allTasks} />
      </div>
    );
  }
}

export default App;
