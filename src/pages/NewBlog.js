import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")
  const [author,setAuthor]=useState("")
const navigate = useNavigate()

  const submitHandler = (e) =>{
    e.preventDefault() 
    const blog = {title,body,author}
    fetch("http://localhost:4000/blogs" ,{
      method:"POST",
      headers : {"Content-Type" : "application/json" },
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log("new blog added");
      navigate("/")
    })
  }

  return (
    <div className="new-blog">
      <h2 className="new-blog-header">Add a New Blog</h2>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="blogTitle">Blog Title :</label>
        <input type="text" 
        name="blogTitle" 
        id="blogTitle" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required />
        <label htmlFor="blogBody">Blog Body :</label>
        <textarea
          name="blogBody"
          id="blogBody"
          cols="24"
          rows="2"
          value={body}
        onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label htmlFor="blogAuthor">Blog Author :</label>
        <input type="text" 
        name="blogAuthor"
        id="blogAuthor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required />
        <button type="submit" className="submit-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
