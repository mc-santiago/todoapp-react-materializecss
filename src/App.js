
import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'get some vitamin D'},
      {id: 2, content: 'code for at least 30min'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    let lastId= Math.max.apply(null, this.state.todos.map(item => item.id))
    todo.id = lastId + 1;
 
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center purple-text">To-do's for this week</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
