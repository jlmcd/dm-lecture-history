import React, {Component} from 'react'
import store, {ADD_TO_LIST} from '../store'

export default class Add extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }
  handleChange = e => {
    this.setState({input: e.target.value})
  }
  addTodo = () => {
    store.dispatch({
      type: ADD_TO_LIST,
      payload: this.state.input
    })
    this.setState({input: ''})
  }
  render() {
    return (
      <div>
        <input 
          type="text"
          value={this.state.input} 
          onChange={e => this.handleChange(e)}
        />
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
}