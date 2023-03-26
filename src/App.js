import './index.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewBlog from "./pages/NewBlog"
import BlogDetails from './pages/BlogDetails';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/newblog" element={<NewBlog/>}/>
        <Route path="/blogs/:id" element={<BlogDetails/>}/> 
        </Route>
        <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
