import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import About from './components/About';
import Projects from './components/Projects';
// import BlogList from './components/BlogList';



// export async function getServerSideProps(context) {
//   const res = await fetch("https://api.hashnode.com/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "812a88da-e6ca-4b9f-a7d7-37a22298c8f0",
//     },
//     body: JSON.stringify({
//       query:
//         'query {user(username: "ptieman") {publication {posts(page: 0) {title brief slug coverImage dateAdded}}}}',
//     }),
//   });
//   const publications = await res.json();
  
//   if (!publications) {
//     return {
//       notFound: true,
//     };
//   }
  
//   return {
//     props: {
//       publications,
//     },
//   };
// }

// const App = ({ publications }) => {
//   console.log(publications);

const App = () => {
  
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/blog" element={<BlogList publications={publications} />} /> */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default App;




