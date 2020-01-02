import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(e) {
    this.setState({ picture: e.target.value })
  }

  updateName(e) {
    this.setState({ name: e.target.value })
  }

  addFriend() {
    const newFriend = {
      name: this.state.name,
      picture: this.state.picture
    }
    this.setState({
      friends: [...this.state.friends, newFriend],
      name: '',
      picture: ''
    })
  }

  render() {
    const friends = this.state.friends.map((friend, index) => (
      <div>
        <h4>{friend.name}</h4>
        <img src={friend.picture} alt={friend.name} />
      </div>
    ))

    return (
      <div className="App">
        <p>
          Picture: 
          <input 
            onChange={e => this.updatePicture(e)}
            value={this.state.picture}
          />
        </p>
        <p>
          Name: 
          <input 
            onChange={e => this.updateName(e)} 
            value={this.state.name}
          />
        </p>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        <hr />
        {friends}
      </div>
    )
  }
}

export default App
