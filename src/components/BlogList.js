import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h5 className="preview-title">{title}</h5>
      {blogs.map((blog) => (
        <div className="preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`} className="blog-link">
          <span className="blog-title">{blog.title}</span>
          <p className="blog-author"> Written by - {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
