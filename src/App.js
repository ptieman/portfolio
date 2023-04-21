import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/landing';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import './index.css';

const App = () => {
  const path = window.location.pathname;

  if (path === '/') {
    return <Landing />;
  } else if (path === '/about') {
    return <About />;
  } else if (path === '/projects') {
    return <Projects />;
  } else if (path === '/blog') {
    return <Blog />;
  } else {
    return <div>Page not found</div>;
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));