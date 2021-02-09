import React, { Component } from 'react';
import Stylesheet from './components/Todo.css'
import todoData from './data/todoData'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

class App extends Component {
  state = {
    todos: todoData,
    inputValue: ''
  }

  handleChange = evt => {
    this.setState({
      inputValue: evt.target.value
    })
  }

  addTodo = evt => {
    evt.preventDefault()

    console.log(evt.target.value)

    // this.setState({
    //   todos: [...this.state.todos, evt.target.value]
    // })
  }

  clearCompleted = () => {
    // If the completed property is not equal to false, remove it from the clearedTodos array
    const clearedTodos = this.state.todos.filter(todo => todo.completed === false)

    this.setState({
      todos: clearedTodos
    })
  }

  toggleCompleted = (clickedTodoId) => {

    this.setState({
      // todos is an array, so we need to recreate the array, plus update one object within the array
      // We're using .map() because it returns a new array
      // todos: [...this.state.todos, newTodo] would work if we were trying to add a NEW todo


      todos: this.state.todos.map(todo => {
        // If the todo we're iterating over is the todo we clicked on, 
        if (todo.id === clickedTodoId) {
          return {
            // Return the todo, plus toggle the completed status by the negation operator
            ...todo,
            completed: !todo.completed
          }
        } else {
          // Otherwise, return the todo untouched
          return todo
        }
      })
    })
  }

  render() {
    return (
      <div>

        <h1>Task Master</h1>

        <TodoForm
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
        />

        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />

      </div>
    );
  }
}

export default App;
