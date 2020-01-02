import React from 'react'

export default class App extends React.Component {
  addPerson() {
    axios.post('/api/users', {first_name: 'Joanthan', last_name: "McDonald"})
  }
  render() {
    return (
      <button onClick={this.addPerson}></button>
    )
  }
}