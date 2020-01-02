import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  componentDidMount() {
    console.log('Hey, I mounted!')
    setTimeout(() => this.setState({inputValue: 'Type something to change me'}), 3000)
  }

  // componentDidUpdate(previousState, previousProps) {
  //   if (previousState.inputValue !== this.state.inputValue) {
  //     console.log('hey, i updated')
  //   }
  // }

  componentWillUnmount() {
    setTimeout(() => alert('youre leaving me!'), 3000)
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.inputValue}</h1>
        <input onChange={(e) => this.handleChange(e)} type="text"/>
      </div>
    )
  }
}

export default App;
