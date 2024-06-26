import React, { useLayoutEffect, useRef, useState } from 'react'

function UseLayoutEffectHook() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div>
      <h2>useLayoutEffect()</h2>
      <div ref={divRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
        Measure me
      </div>
      <p>Width: {dimensions.width}px, Height: {dimensions.height}px</p>
    </div>
  );
}

export default UseLayoutEffectHook