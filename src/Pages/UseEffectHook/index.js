import React, { useEffect, useState } from 'react'

function UseEffectHook() {
  const [inputVal, setInputVal] = useState('Default Input Value')
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // componentDidMount() //
    document.getElementById('component-did-mount').textContent +=` HaHaHaHa`;
  },[])

  useEffect(() => {
    // componentDidUpdate() //
    if(inputVal != 'Default Input Value')
      setCount(count+1);
  }, [inputVal])

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function // componentWillUnmount() //
    return () => {
      console.log('Cleaning up...');
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div>
      <h2>useEffect()</h2>
      <p>
      React.Strict mode is on <br />
      StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).<br />
      So useEffect running Twice.
      <b id='component-did-mount'>
      This is componentDidMount with useEffect
      </b>
      </p>
      <br />
      <input placeholder='Write Anything' onChange={(e)=>{setInputVal(e.currentTarget.value)}}/>
      <br />
      {inputVal}
      <br />
      <h2 id='component-did-update'>
      This is componentDidUpdate with useEffect : onChange Triggered {count}
      </h2>
      <br />
      <b>When you return a function from within the useEffect hook, that function acts as the cleanup function and is executed when the component is about to unmount or before the effect runs again if the dependencies have changed.</b> <br/>
      <h2 id='component-did-update'>
      This is componentWillUnmount with useEffect : Seconds {seconds}
      </h2>
    </div>
  )
}

export default UseEffectHook