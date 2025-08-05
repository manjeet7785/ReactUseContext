import React from 'react'

const Third = ({ num, setnum }) => {
  return (
    <div>
      <h1>Welcome To Third {num}</h1>
      <button onClick={() => setnum(num + 1)}>Increament</button>

      <button style={{ margin: "16px" }} onClick={() => setnum(num - 1)}>Decreament</button>
    </div>
  )
}

export default Third;