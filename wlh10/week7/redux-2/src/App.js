import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/characters' component={Characters} />
      </Switch>
    </div>
  );
}

export default App;
