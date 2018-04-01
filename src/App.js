import { Facebook } from 'react-content-loader'
import axios from 'axios'
import React, { Component } from 'react'

import TodoItems from './Components/TodoItems'
import TodoList from './Components/TodoList'

const loadingArr = [1, 2, 3, 4, 5]

class App extends Component {
  state = {
    todos: [],
    loading: false
  }

  componentDidMount () {
    this.setState({ loading: true })
    axios.get(`${process.env.REACT_APP_BACKEND_API}/tasks`).then((response) => {
      const { data = [] } = response
      this.setState({
        todos: data,
        loading: false
      })
    }).catch((error) => {
      console.error(error)
      this.setState({
        todos: [],
        loading: false
      })
    })
  }

  onAdd = (task) => {
    this.setState({ loading: true })
    const data = { message: task }
    axios.post(`${process.env.REACT_APP_BACKEND_API}/tasks`, data).then((response) => {
      return axios.get(`${process.env.REACT_APP_BACKEND_API}/tasks`)
    }).then((response) => {
      const { data = [] } = response
      this.setState({
        todos: data,
        loading: false
      })
    }).catch((error) => {
      console.error(error)
      this.setState({
        todos: [],
        loading: false
      })
    })
  }

  onDel = (id) => {
    this.setState({ loading: true })
    axios.delete(`${process.env.REACT_APP_BACKEND_API}/tasks/${id}`).then((response) => {
      return axios.get(`${process.env.REACT_APP_BACKEND_API}/tasks`)
    }).then((response) => {
      const { data = [] } = response
      this.setState({
        todos: data,
        loading: false
      })
    }).catch((error) => {
      console.error(error)
      this.setState({
        todos: [],
        loading: false
      })
    })
  }

  render () {
    return (
      <div>
        <TodoList addTodo={this.onAdd} />
        {
          this.state.loading ?
            (
              <div>
                {
                  loadingArr.map((record, idx) => <Facebook key={idx} />)
                }
              </div>
            )
            :
            (
              <TodoItems todos={this.state.todos} remove={this.onDel} />
            )
        }
      </div>
    )
  }
}

export default App
