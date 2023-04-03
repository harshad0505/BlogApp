import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
  const {data:blogs , isLoading, error} = useFetch("https://mauve-cygnet-gown.cyclic.app/blogs")


  return (
    <div className="home">
      {isLoading && <h2>Loading..</h2> }
      {error && <div>{error}</div> }
      { blogs && <BlogList blogs={blogs} title= "All blogs..!" />}
    </div>
  );
};

export default Home;