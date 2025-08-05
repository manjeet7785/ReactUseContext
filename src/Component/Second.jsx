import React from 'react'
import { useContext } from 'react'
import ContextGl from '../ContextGl'

const Second = () => {
  const [count, setCount] = useContext(ContextGl)
  return (
    <div>
      <h1>Welcome To Second  ${count} </h1>
      <button onClick={() => setnum(num + 1)}>Increament</button>
    </div>
  )
}

export default Second     