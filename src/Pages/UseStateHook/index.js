import React, { useState } from 'react'

function UseStateHook() {
  const [count, setCount] = useState(0)

  const IncreaseCount = () => {
    setCount(count+1)
  }

  return (
    <div>
      <h2>useState()</h2>
      {count}<br />
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={()=>{
        if(count > 0)
        setCount(count-1)
      }}>Decrease</button>
    </div>
  )
}

export default UseStateHook