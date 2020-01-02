import React from 'react'
import './App.css'
import axios from 'axios'

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => {
        this.setState({users: res.data})
      })
  }

  getStarWarsPeople() {
    axios.get('/api/swapi')
      .then(res => {
        this.setState({users: res.data.results})
      })
  }

  render() {
    return (
    <div className="App">
      <h1>Users Below!</h1>
      <button onClick={() => this.getStarWarsPeople()}>IMAGINATION!</button>
      {JSON.stringify(this.state.users)}
    </div>
    )
  }
}

export default App
