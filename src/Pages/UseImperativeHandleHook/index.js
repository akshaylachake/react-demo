import React, { useRef } from 'react'
import Child from './Child';

function UseImperativeHandleHook() {
  const inputRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle()</h2>
      <Child ref={inputRef} placeholder="Enter text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
    </div>
  );
}

export default UseImperativeHandleHook