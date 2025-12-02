import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/debounce-throttle">Debouncing and Throttling</Link>
      </li>
      <li>
        {" "}
        Hooks
        <ul>
          <li>
            <Link to="/use-state-hook">useState()</Link>
          </li>
          <li>
            <Link to="/use-reducer-hook">useReducer()</Link>
          </li>
          <li>
            <Link to="/use-effect-hook">useEffect()</Link>
          </li>
          <li>
            <Link to="/use-ref-hook">useRef()</Link>
          </li>
          <li>
            <Link to="/use-layout-effect-hook">useLayouEffect()</Link>
          </li>
          <li>
            <Link to="/use-imperative-handle-hook">useImperativeHandle()</Link>
          </li>
          <li>
            <Link to="/use-context-hook">useContextHook()</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/fetch-api">FetchApi</Link>
      </li>
      <li>
        <Link to="/dynamic-inputs">Dynamic Inputs</Link>
      </li>
    </ul>
  );
}

export default NavBar;
