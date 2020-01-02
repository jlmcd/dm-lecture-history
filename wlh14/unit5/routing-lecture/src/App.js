import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import CommonRoom from './components/CommonRoom'
import MissingPage from './components/MissingPage'

class App extends Component {
  state = {
    house: null,
    mainColor: '',
    secondaryColor: ''
  }
  updateHouseInfo = newState => {
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Hoggy Hoggy Hogwarts</h1>
          <img
            src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805"
            alt=""
          />
        </header>

        <Switch>
          {/* THE COMPONENT METHOD */}
          <Route
            exact
            path="/"
            component={() => <Home updateHouseInfo={this.updateHouseInfo} />}
          />

          {/* THE CHILDEREN METHOD */}
          <Route path="/about">
            <About />
          </Route>

          {/* THE RENDER METHOD */}
          <Route
            path="/commonroom/:name"
            render={() => (
              <CommonRoom
                mainColor={this.state.mainColor}
                secondaryColor={this.state.secondaryColor}
              />
            )}
          />

          {/* THE DEFAULT ROUTE */}
          <Route component={MissingPage} />
        </Switch>
      </div>
    )
  }
}

export default App
