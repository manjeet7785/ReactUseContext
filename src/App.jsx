import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateLifting from './StateLifting'
import Increament from './Increament'
import Decreament from './Decreament'
import First from './Component/First'
import Second from './Component/Second'
import Third from './Component/Third'
import Fourth from './Component/Fourth'
import ContextGl from './ContextGl'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextGl.Provider value={{ count, setCount }}>
        <First />
        <Second />
        <Third />
        <Fourth />
      </ContextGl.Provider>
      {/* num={count} setnum={setCount}  */}
      {/* <StateLifting />
      <Increament counts={count} setCounts={setCount} />
      <Decreament counts={count} setCounts={setCount} /> */}
    </>
  )
}

export default App
