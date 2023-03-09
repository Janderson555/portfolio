import { Routes, Route } from 'react-router-dom'; //Navigate
import React from 'react';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="*" element={ <Home /> } />
    </Routes>
  );
}

export default AppRoutes;
