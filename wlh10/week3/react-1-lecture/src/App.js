import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Andrew',
      coolness: 'over 9000',
      mustache: true,
      foodItems: ['Apple', 'Banana', 'Orange', 'Apple Sauce', 'Grapple', 'Apricot']
    }
  }

  // METHODS
  growShave() {
    this.setState({
      mustache: !this.state.mustache
    })
  }
  setName(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const list = this.state.foodItems.map(item => (
      <li>{item}</li>
    ))
    return (
      <div className="App">
        <h1>{this.state.name}'s Story</h1>
        <p>{this.state.name} is a muscular, handsome lizard.</p>
        <p style={{backgroundColor: this.state.name === 'Andrew' ? 'tomato' : null}}>This guy loves his mama.</p>
        <p>
          {this.state.mustache === true ? 
            (`Hee's got a boss mustache`) 
            : 
            (`He should grow a boss mustache`)}
        </p>
        <button onClick={(e) => this.growShave(e)}>Grow/Shave</button>
        <hr />
        <input onChange={e => this.setName(e)} />
        <ul className='list'>
          {list}
        </ul>
      </div>
    )
  }
}

export default App
