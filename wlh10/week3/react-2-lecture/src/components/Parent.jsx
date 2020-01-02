import React, { Component } from 'react'
import InfoCard from './InfoCard'

export default class Parent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Josh',
      age: 27,
      email: 'joshisthebest92@gmail.com',
      phone: '801-543-21235',
      address: '123 Cool St., Westsport NY',
      website: 'josh-mccann.com'
    }
  }

  render() {
    return (
      <div className="parent">
        <h1>User Info</h1>
        <InfoCard
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
