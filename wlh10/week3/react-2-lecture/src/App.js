import React from 'react'
import './App.css'
import Parent from './components/Parent'
import Blog from './components/Blog'
import Numbers from './components/Numbers'

function App() {
  return (
    <div className="app">
      <Parent />
      <hr />
      <Blog />
      <hr />
      <Numbers />
      <hr />
      <hr />
    </div>
  )
}

export default App
