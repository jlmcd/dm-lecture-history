import React from 'react'
import Counter from './components/Counter'
import PianoList from './components/PianoList'
import Poke from './components/Poke'
import ComplexButton from './components/ComplexButton'
import SimplerButton from './components/SimplerButton'
import Toggle from './components/Toggle'
import ToggleRenderProps from './components/ToggleRenderProps'
import ToggleRPC from './components/ToggleRPC'
import './App.css'

function App() {
  // const [state, setState] = useState({
  //   name: '',
  //   age: 29,
  //   etc: 'something'
  // })
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <PianoList /> */}
      {/* <Poke /> */}
      {/* <ComplexButton disabled />
      <ComplexButton /> */}
      {/* <SimplerButton />
      <SimplerButton disabled /> */}
      <Toggle>
        <h1>What do you do when you see a space man?</h1>
      </Toggle>
      <ToggleRenderProps 
        render={({on, setOn, style}) => (
          <div>
            {on && <h1>Park your car, man.</h1>}
            <button style={style} onClick={() => setOn(!on)}>Show/Hide</button>
          </div>
        )}
      />
      <ToggleRPC>
        {({on, setOn, style}) => (
          <div>
            {on && <h1>I got an A on my origami assignment when I turned my paper into my teacher</h1>}
            <button style={style} onClick={() => setOn(!on)}>Show/Hide</button>
          </div>
        )}
      </ToggleRPC>
    </div>
  )
}
export default App
