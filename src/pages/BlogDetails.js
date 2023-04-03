import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import useFetch from "../components/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("https://mauve-cygnet-gown.cyclic.app/blogs/" + id);
  const navigate = useNavigate();


  const deleteHandler = () => {
    fetch("https://mauve-cygnet-gown.cyclic.app/blogs/"+ id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <h2>Loading..</h2>}
      {error && <div>{error}</div>}
      {blog && ( 
        <article>
          <h2 className="blog-details-title">{blog.title}</h2>
          <p  className="blog-details-author">Written by - {blog.author}</p>
          <div className="blog-details-body">{blog.body}</div>
          <button className="delete-btn" onClick={() => deleteHandler(blog.id)}>
            Delete
          </button>

          
        </article>
      )}
      
    </div>
  );
};

export default BlogDetails;
