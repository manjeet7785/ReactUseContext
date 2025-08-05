import React, { useState } from 'react'


const Increament = ({ counts, setCounts }) => {
  return (
    <div>I
      <h1>count={counts}</h1>
      <button onClick={() => { setCounts(counts + 1) }} >Increment</button>
    </div>
  )
}

export default Increament;