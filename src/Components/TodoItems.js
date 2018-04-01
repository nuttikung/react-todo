import FlipMove from "react-flip-move"
import React, { Component } from 'react'

import './TodoItems.css'

class TodoItems extends Component {
  render () {
    const { todos = [] } = this.props
    return (
      <ul className="theList">
        <FlipMove duration={300} easing="ease-out">
          {
            todos.map(({ _id, message }) => <li key={_id} onClick={() => this.props.remove(_id)}>{message}</li>)
          }
        </FlipMove>
      </ul>
    )
  }
}

export default TodoItems
