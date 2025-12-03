import React, { useCallback, useState } from "react";

export default function UseCallBack() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // returns same function instance across renders

  return (
    <>
      Memoize functions
      <br />
      Returns : Function
      <br />
      When to use : When child components depend on stable callbacks to prevent
      re-renders
      <br />
      <Child onClick={handleClick} />
      <button onClick={() => setCount((c) => c + 1)}>
        Re-render Parent {count}
      </button>
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child render"); // reders only once if onClick changes
  return <button onClick={onClick}>Child Button</button>;
});
