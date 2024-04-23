import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import React from 'react'

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
       <Link to="/Home">Home</Link>
       <Link to="/About"> About</Link>
       <Link to="/contact"> Contact</Link>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={< Contact/>} />
      </Routes>
   </Router>
  )
}

export default App
