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

  updatePicture(value) {
    this.setState({
      picture: value
    })
    console.log(this.state)
  }

  updateName(value) {
    this.setState({
      name: value
    })
  }

  async addFriend() {
    await this.setState({
      friends: [
        ...this.state.friends,
        { name: this.state.name, picture: this.state.picture }
      ]
    })
    if (this.state.friends.length === 3) {
      const res = window.prompt('How many friends??', 3)
      if (+res !== 3 && !isNaN(+res)) {
        const newFriends = [...this.state.friends]
        for (let i = 0; i < +res; i++) {
          newFriends.push({name: this.state.name, picture: this.state.picture})
        }
        this.setState({friends: newFriends})
      }
    }
    this.setState({name: '', picture: ''})
  }

  render() {
    const friendsMap = this.state.friends.map(friend => {
      return (
        <div>
          <img src={friend.picture} alt={friend.name} />
          <span>{friend.name}</span>
        </div>
      )
    })
    return (
      <div className="App">
        <p>
          Picture URL:{' '}
          <input
            value={this.state.picture}
            onChange={e => this.updatePicture(e.target.value)}
          />
        </p>
        <p>
          Name:{' '}
          <input
            value={this.state.name}
            onChange={e => this.updateName(e.target.value)}
          />
        </p>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friendsMap}
      </div>
    )
  }
}

export default App
