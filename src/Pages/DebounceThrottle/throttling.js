import { useEffect, useState } from "react";

function throttle(fn, delay) {
  let last = 0;

  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  };
}

export default function ScrollThrottle() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h2>Throttling Example:</h2>
      <p>
        Function runs at fixed intervals, ignoring extra calls.
        <br />
        Ensures execution happens every X milliseconds, at most.
        <br />
        <br />
        <b>
          Throttle makes sure a function runs at a consistent rate, no matter
          how many times the event fires..
        </b>
        <br />
        <br />
        Best for:
        <ul>
          <li>Scroll events</li>
          <li>Resize events</li>
          <li>Infinite scrolling</li>
          <li>Drag events</li>
          <li>Monitoring mouse movement</li>
        </ul>
      </p>
      Scroll position: {scrollY}
    </div>
  );
}
