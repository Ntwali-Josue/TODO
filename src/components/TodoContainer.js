import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import About from "../pages/about";
import Navbar from "./NavBar";
import SinglePage from "../pages/SinglePage"


class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (id, updatedTitle) => {
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.title = updatedTitle;
          }
          return todo;
        }),
      ],
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodoList
                  todos={this.state.todos}
                  handleChangeProps={this.handleChange}
                  deleteTodoProps={this.delTodo}
                  setUpdate={this.setUpdate}
                />
              </div>
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </>
    );
  }
}

export default TodoContainer;
