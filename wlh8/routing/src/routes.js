import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import House from './components/House'
import NotFound from './components/NotFound'

const router = that => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Home updateHouseInfo={that.updateHouseInfo} />}
      />
      <Route path="/about" component={About} />
      <Route
        path="/house/:name"
        component={() => (
          <House
            mainColor={that.state.mainColor}
            secondaryColor={that.state.secondaryColor}
          />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  )
}

export default router
