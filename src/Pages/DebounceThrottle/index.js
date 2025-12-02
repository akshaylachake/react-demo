import React, { useState, useEffect } from "react";
import ScrollThrottle from "./throttling";

function DebounceThrottle() {
  const [query, setQuery] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(query);
    }, 500);

    return () => clearTimeout(handler); // cleanup
  }, [query]);

  useEffect(() => {
    const result = document.getElementById("debounce-result");
    if (result) {
      if (debouncedValue) {
        result.textContent = `You searched for: ${debouncedValue}`;
        console.log("API call with:", debouncedValue);
        return;
      }
      result.textContent = "";
    }
  }, [debouncedValue]);

  return (
    <>
      <p>
        Both debouncing and throttling are techniques to control how often a
        function is executed, especially during high-frequency events like
        scroll, resize, keypress, mousemove, etc.
      </p>
      <h2>Debouncing Example:</h2>
      <p>
        Function runs after a delay, and resets the timer if called again.
        <br />
        Ensures the function executes only once after the event stops firing.
        <br />
        <br />
        <b>
          Debounce waits for the user to stop triggering the event, then runs
          the function once.
        </b>
        <br />
        <br />
        Best for:
        <ul>
          <li>Search input (wait until user stops typing)</li>
          <li>Auto-save forms</li>
          <li>
            Resizing window end-event Button click prevention (double-click)
          </li>
        </ul>
      </p>
      <input
        type="text"
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div id="debounce-result"></div>
      <br />
      <br />
      <br />
      <ScrollThrottle />
    </>
  );
}

export default DebounceThrottle;
