import React from 'react';
import './App.css';
import Parent from './components/Parent'
import Blog from './components/Blog'
import Numbers from './components/Numbers'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      pancakeURL: ''
    }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  showAPancake() {
    this.setState({
      pancakeURL: 'https://images.media-allrecipes.com/userphotos/250x250/4948036.jpg'
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event)} />
        <h1>{this.state.input}</h1>
        <button onClick={() => this.showAPancake()}>Click for pancakes</button>
        <img src={this.state.pancakeURL} alt="" />
        <hr />
        <hr />
        <Parent />
        <hr />
        <hr />
        <Blog />
        <hr />
        <hr />
        <Numbers />
      </div>
    )
  }
}

export default App;
