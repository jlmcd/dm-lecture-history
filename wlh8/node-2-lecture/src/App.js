import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    swapiData: []
  }

  getData() {
    axios.get('/api/swapi').then(res => {
      this.setState({ swapiData: res.data.results })
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getData()}>Get the Data</button>
        {this.state.swapiData.map(person => (
          <h1 key={person.name}>{person.name}</h1>
        ))}
      </div>
    )
  }
}
