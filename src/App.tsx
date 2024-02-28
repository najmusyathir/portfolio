import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Project";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">
      <NavBar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
