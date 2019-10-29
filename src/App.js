
import React, { Component } from 'react'
import Todos from './Todos'

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'get some vitamin D'},
      {id: 2, content: 'code for at least 30min'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter (todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center purple-text">Todo's for this week</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
