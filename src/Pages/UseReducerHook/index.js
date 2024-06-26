import React, { useReducer } from 'react'

const initialStates = { count:0, text:"Click"};

const reducer = (states,action) =>{
  switch (action.type) {
    case "increase":
      return {
        count: states.count + 1,
        text: "Increase"
      }
    case "decrease":
      return {
        count: states.count - 1,
        text: "Decrease"
      }
    case 'reset':
      return initialStates;
    default:
      throw new Error();
  }
}

function UseReducerHook() {
  const [states, dispatch] = useReducer(reducer, initialStates)

  return (
    <div>
      <h2>useReducer()</h2>
      {states.count}<br />{states.text}<br />
      <button onClick={()=>{
        dispatch({type:'increase'})
      }}>Increase</button>
      <button onClick={()=>{
        dispatch({type:'decrease'})
      }}>Decrease</button>
      <button onClick={()=>{
        dispatch({type:'reset'})
      }}>Reset</button>
    </div>
  )
}

export default UseReducerHook