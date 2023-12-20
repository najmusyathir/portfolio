
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from "./ui/Home";
import About from "./ui/About";
import Projects from "./ui/Project";
import Contact from "./ui/Contact";

import './index.css';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contacts" element={<Contact />} />

      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

const Root = () => {

  return (
  <>
    <div className="navbar">
      <Navbar />
    </div>
    
    <div className="content">
      <Outlet/>
    </div>

  </>);
}

export function Navbar(){
  return (
  <div id="navbar">
      <div id="nav_child1">
          <a id="logo" href="https://www.google.com" className="font-medium px-3 py-2 text-slate-700 rounded-lg">Najmu Syathir</a>
      </div>

      <div id="nav_child2">
          <nav className="nav_hlink">
              <a href="/home">Home</a>
              <a href="/about" >About</a>
              <a href="/projects">Projects</a>
              <a href="/contacts">Contact Me</a>
          </nav>
      </div>
      <button id="resume">My Resume</button>


  </div>);
}

export default App;
