import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:4000/blogs/" + id);

  return (
    <div className="blog-details">
      {isLoading && <h2>Loading..</h2>}
      {error && <div>{error}</div>}
      {blog && ( 
        <article>
          <h2>{blog.title}</h2>
          <p>Written by - {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      {/* <button className="delete-btn" onClick={() => handleDelete(blog.id)}>
            Delete
          </button> */}
    </div>
  );
};

export default BlogDetails;
