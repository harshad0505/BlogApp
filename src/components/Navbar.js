import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
    <nav className="navbar-container">
      <div className="navbar">
        <span className="logo">Jega Blogs</span>
        <div className="links">
          <Link to="/" className="link">
            <AiFillHome className="icon" />
            Home
          </Link>
          <Link to="/newblog" className="link">
            <ImBlog className="icon"/>
            New Blog
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
