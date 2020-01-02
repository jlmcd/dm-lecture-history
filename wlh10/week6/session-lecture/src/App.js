import React from 'react'
import './App.css'
import axios from 'axios'

class App extends React.Component {
  state = {
    usernameInput: '',
    username: '',
    points: null
  }

  handleChange = (e) => {
    this.setState({usernameInput: e.target.value})
  }

  login = async () => {
    const res = await axios.post('/api/login', {username: this.state.usernameInput})
    this.setState({usernameInput: '', username: res.data})
  }

  getPoints = async () => {
    try {
      const res = await axios.get('/api/points')
      this.setState({points: res.data})
    } catch(err) {
      alert(`Nice try, ${this.state.username}!`)
    }

    // axios.get('/api/points').then(res => {
    //   this.setState({points: res.data})
    // }).catch(err => {
    //   alert(`Nice try, ${this.state.username}!`)
    // })
  }
  
  render() {
    return (
      <div className="App">
        <h1>{this.state.username}</h1>
        <input
          placeholder="Username"
          value={this.state.usernameInput}
          type="text"
          onChange={e => this.handleChange(e)}
        />
        <button onClick={this.login}>Login</button>
        {this.state.username && <button onClick={this.getPoints}>Get Points</button>}
        <h2>{this.state.points}</h2>
      </div>
    )
  }
}

export default App
