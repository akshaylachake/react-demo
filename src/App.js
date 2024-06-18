import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import FetchApi from './Pages/FetchApi';
import NavBar from './NavBar';

function App() {
  const styles = {
    fontSize: '3rem',
    fontStyle: 'bold',
    color: '#fff',
    textAlign: 'center'
  }

  return (
    <div className="App">
      <header className="App-header">
        <div><Link style={styles} to="/">React</Link></div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        =====================================
        Routing Learning {'<BrowserRouter/>'} in index.js
        <br/>
        <NavBar />
        <br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fetch-api" element={<FetchApi />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
