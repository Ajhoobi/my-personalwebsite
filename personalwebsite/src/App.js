import React from "react";
import Home from "../components/Home";
import PersonalHead from "../components/personalHead";
import About from "../components/About";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Skills from "../components/Skills";
import PostsList from "../components/blog/blogLists";
import BlogFocus from "../components/blogFocus/blogFocus";
import Portfolio from "../components/portfolio/portfolio";

// Rendered when a user visits "/list?order=DESC"

const App = () => {
  return (
    <BrowserRouter>
      <PersonalHead />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/blog" element={<PostsList />} />
        <Route path={`/blogfocus`} element={<BlogFocus />} />
        <Route path={`/Portfolio`} element={<Portfolio />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
