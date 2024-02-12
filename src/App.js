// src/App.js
import React from 'react';
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Post from './Components/Post.js';
import About from './Components/About';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* Add a route for individual blog posts */}
        <Route path="/post/:id" element={<Post/>} />
        {/* <Route path="/post/:id" element={< About/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
