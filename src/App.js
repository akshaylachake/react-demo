import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import DebounceThrottle from "./Pages/DebounceThrottle";
import Home from "./Pages/Home";
import FetchApi from "./Pages/FetchApi";
import NavBar from "./NavBar";
import UseStateHook from "./Pages/UseStateHook";
import UseEffectHook from "./Pages/UseEffectHook";
import UseReducerHook from "./Pages/UseReducerHook";
import UseRefHook from "./Pages/UseRefHook";
import UseLayoutEffectHook from "./Pages/UseLayoutEffectHook";
import UseImperativeHandleHook from "./Pages/UseImperativeHandleHook";
import UseContextHook from "./Pages/UseContextHook";
import DynamicInputs from "./Pages/DynamicInputs";

function App() {
  const styles = {
    fontSize: "3rem",
    fontStyle: "bold",
    color: "#fff",
    textAlign: "center",
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link style={styles} to="/">
            React
          </Link>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        ===================================== Routing Learning{" "}
        {"<BrowserRouter/>"} in index.js
        <br />
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/debounce-throttle" element={<DebounceThrottle />} />
          <Route path="/fetch-api" element={<FetchApi />} />
          <Route path="/dynamic-inputs" element={<DynamicInputs />} />
          <Route path="/use-state-hook" element={<UseStateHook />} />
          <Route path="/use-reducer-hook" element={<UseReducerHook />} />
          <Route path="/use-effect-hook" element={<UseEffectHook />} />
          <Route path="/use-ref-hook" element={<UseRefHook />} />
          <Route
            path="/use-layout-effect-hook"
            element={<UseLayoutEffectHook />}
          />
          <Route
            path="/use-imperative-handle-hook"
            element={<UseImperativeHandleHook />}
          />
          <Route path="/use-context-hook" element={<UseContextHook />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
