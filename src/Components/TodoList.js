import React, { Component } from 'react'

import './TodoList.css'

class Todolist extends Component {
  state = {
    task: ''
  }

  addItem = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.task)
    this.setState({ task: '' })
  }

  render () {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              placeholder="Enter task"
              value={this.state.task}
              onChange={(e) => this.setState({ task: e.target.value })}
            />
            <button type="submit">+</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Todolist
