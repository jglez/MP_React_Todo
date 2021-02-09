import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const { taskName, toggleCompleted, completed, taskId } = this.props

    return (
      <>
        <li
          // If the the completed property on the Todo is true, set className to completed, activating styles
          // Otherwise, className is null
          className={completed ? 'completed' : ''}


          // We need to write the onClick as a function definition, not as an invocation, so we need the parentheses
          // Otherwise, we will get an infinite loop of updating state and re-rendering
          onClick={() => toggleCompleted(taskId)}
        > {taskName}</li>
      </>
    )
  }
}

export default Todo