import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Andrew',
      coolness: 'over 9000',
      beard: true,
      skills: ['Drumming like a boss', 'coding like an animal', 'analyzing movies like a lil roger ebert']
    }
  }

  setName(e) {
    // * this.state.name = e.target.value
    // * Don't do this ^^^ because it won't allow the DOM to refresh, changing what we see on the page
    // * Instead, use the "this.setState" method below :)
    this.setState({
      name: e.target.value
    })
  }

  toggleBeard() {
    this.setState({
      beard: !this.state.beard
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.name}'s Website</h1>
        <input placeholder='name' onChange={e => this.setName(e)} />
        <p>{this.state.name} is so cool. His coolness is {this.state.coolness}!</p>
        <p>{this.state.beard ? `${this.state.name} has a wicked beard` : `${this.state.name} wishes they could grow a beard`}</p>
        <button onClick={() => this.toggleBeard()}>Grow/Shave</button>

        <hr />
        <h2>{this.state.name}'s Skills:</h2>
        {this.state.skills.map(skill => <h3 key={skill}>{skill}</h3>)}
      </div>
    )
  }
}

export default App

// * event.stopPropagation (to stop event bubbling) (in the function you're running)