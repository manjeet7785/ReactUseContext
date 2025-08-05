import React from 'react'
import { useState } from 'react';


function Decreament({ counts, setCounts }) {
  console.log("HEkki");

  return (
    <div>
      <h1>Count = {counts}</h1>
      <button onClick={() => setCounts(counts - 1)}>Decreament</button>
    </div>

  )
}

export default Decreament;