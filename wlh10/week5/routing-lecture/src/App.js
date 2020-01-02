import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import CommonRoom from './components/CommonRoom'
import MissingPage from './components/MissingPage'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    house: null,
    mainColor: '',
    secondaryColor: ''
  }
  updateHouseInfo = newState => {
    this.setState(newState)
  }
  navigateHome = () => {
    window.location = '/#/'
  }
  render() {
    return (
      <div className="App">
        <header onClick={() => this.navigateHome()}>
          <h1>Hoggy Hoggy Hogwarts</h1>
          <img
            src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805"
            alt="Hogwarts Crest"
          />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home
                updateHouseInfo={this.updateHouseInfo}
                sorted={this.state.house}
              />
            )}
          />
          <Route
            path="/about"
            component={() => <About sorted={this.state.house} />}
          />
          <Route
            path="/house/:housename"
            component={() => (
              <CommonRoom
                mainColor={this.state.mainColor}
                secondaryColor={this.state.secondaryColor}
              />
            )}
          />
          <Route component={MissingPage} />
        </Switch>
      </div>
    )
  }
}

export default App
