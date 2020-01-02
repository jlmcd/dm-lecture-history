import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    input: '',
    todos: ['Practice the Piano']
  }

  addTodo() {
    this.setState({
      todos: [...this.state.todos, this.state.input]
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.todos.map(el => (
          <li key={el}>{el}</li>
        ))}
        <input
          onChange={e => this.setState({ input: e.target.value })}
          type="text"
          value={this.state.input}
        />
        <button onClick={() => this.addTodo()}>Add Todo</button>
      </div>
    )
  }
}

export default App
