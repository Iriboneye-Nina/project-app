import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./assets/pages/Layout";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/contact";

import React from 'react'

function App() {
  return (
    <>
    <BrowserRouter>
         <Routes>
         <Route path="/" element={<Layout />} >
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
           </Route>
           </Routes>
    </BrowserRouter>
 
        </>
  )
}

export default App
