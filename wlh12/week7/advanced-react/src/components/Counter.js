import React, {useState} from 'react'

export default () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  )
}