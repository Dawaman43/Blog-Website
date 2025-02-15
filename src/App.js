import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import About from './components/About';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;