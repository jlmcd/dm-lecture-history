import React, {Component} from 'react'
import './App.css'

class App extends Component {
  // ! CONSTRUCTOR RUNS FIRST
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  // ! COMPONENTDIDMOUNT RUNS ONCE, AFTER THE FIRST RENDER
  componentDidMount() {
    console.log('hey I mounted!')
    setTimeout(() => this.setState({inputValue: 'Type something to change me'}), 3000)
  }

  // ! COMPONENTDIDUPDATE RUNS AFTER EACH CONSECUTIVE RENDER
  componentDidUpdate(previousState, previousProps) {
    if (previousState.inputValue !== this.state.inputValue) {
      console.log('hey I updated!')
    }
  }

  handleChange(e) {
    // ! THIS.SETSTATE CAUSES RENDER TO RUN AGAIN
    this.setState({
      inputValue: e.target.value
    })
  }

  // ! RENDER RUNS SECOND
  render() {
    return (
      <div className="App">
        <h1>{this.state.inputValue}</h1>
        <input onChange={e => this.handleChange(e)} />
      </div>
    )
  }
}

export default App