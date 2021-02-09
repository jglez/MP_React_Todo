// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    const { todos, toggleCompleted } = this.props

    return (
      <>

        {todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              taskName={todo.task}
              completed={todo.completed}
              toggleCompleted={toggleCompleted}
              taskId={todo.id}
            />
          )
        })}

      </>
    )
  }
}

export default TodoList