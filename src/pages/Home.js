import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
  const {data:blogs , isLoading, error} = useFetch("http://localhost:4000/blogs")


  // const handleDelete = (id) => {
  //   const filteredBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(filteredBlogs);
  // };

  return (
    <div className="home">
      {isLoading && <h2>Loading..</h2> }
      {error && <div>{error}</div> }
      { blogs && <BlogList blogs={blogs} title= "All blogs..!" />}
    </div>
  );
};

export default Home;