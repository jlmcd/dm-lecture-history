import React, {Component} from 'react';
import './App.css';
import Jonathan from './components/Jonathan'
import Counter from './components/Counter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      age: 27
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <div id='soemthing' className='div'>
          <p>
            {this.state.age >= 18 ? 'im a big kid now' : 'i dont wanna grow up'}
          </p>
        </div>
        <Jonathan hobbies='piano' age={this.state.age} />
        <hr />
        <hr />
        <Counter />
      </div>
    )
  }
}

export default App;
