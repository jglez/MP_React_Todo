import React, { Component } from 'react'

class TodoForm extends Component {
  render() {
    const { inputValue, handleChange, addTodo } = this.props

    return (
      <>
        <form onSubmit={addTodo}>
          <input
            name='todo'
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder='Add a task'
          />

          <button>Add Task</button>

        </form>
      </>
    )
  }
}

export default TodoForm