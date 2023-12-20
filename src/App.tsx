import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Home from "./ui/Home";
import About from "./ui/About";
import Projects from "./ui/Project";
import Contact from "./ui/Contact";

import './index.css';

import src_resume from "./assets/RESUME_MUHAMMAD NAJMU AL SYATHIR BIN AZEMI.pdf";

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
            {/* Optionally, you can have a default route */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="nav_child1">
        <Link to="/home" className="font-medium px-3 py-2 text-slate-700 rounded-lg">Najmu Syathir</Link>
      </div>
      <div id="nav_child2">
        <nav className="nav_hlink">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contacts">Contact Me</Link>
        </nav>
      </div>
      <a href={src_resume} download="RESUME_MUHAMMAD NAJMU AL SYATHIR BIN AZEMI.pdf" target="_blank" rel="noopener noreferrer" >
      <button id="resume">My Resume</button>
      </a>
    </div>
  );
}



export default App;
