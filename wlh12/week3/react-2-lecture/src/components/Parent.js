import React, {Component} from 'react'
import Child from './Child'

export default class Parent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Aaron',
      age: 27,
      email: 'aaronisthebest92@gmail.com',
      phone: '801-765-4321',
      address: '123 Cool St., Westsport NY',
      website: 'refactoredumbrella.com'
    }
  }

  render() {
    return (
      <div className='parent'>
        <h1>User Info</h1>
        <Child 
          name={this.state.name} 
          age={this.state.age} 
          email={this.state.email}
          phone={this.state.phone}
          address={this.state.address}
          website={this.state.website}
        />
      </div>
    )
  }
}
