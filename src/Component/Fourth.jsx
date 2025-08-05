import React, { useContext } from 'react'
import ContextGl from '../ContextGl';

const Fourth = () => {
  const data = useContext(ContextGl);
  return (
    <div>
      <div>
        <h1>Welcome To Fourth {num}</h1>

        <button >Increament</button>
        <h1>Welcome To Fourth {data}</h1>

      </div></div>
  )
}

export default Fourth; 