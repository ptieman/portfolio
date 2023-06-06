import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default App;
