import React, { useRef } from 'react'

function UseRefHook() {
  const inputRef = useRef(null)

  return (
    <div>
      <h2>useRef()</h2><br />
      <input placeholder='Click button to get value using useRef' ref={inputRef}/>
      <button onClick={() => { 
        inputRef.current.focus();
      }}>Focus</button>
      <button onClick={() => { 
        document.getElementById("result").textContent = inputRef.current.value;
      }}>Print Result</button>
      <button onClick={() => { 
       inputRef.current.value = "";
      }}>Reset</button>
      <h3>Click button to get value using useRef / Result : <b id="result"></b></h3>
    </div>
  )
}

export default UseRefHook