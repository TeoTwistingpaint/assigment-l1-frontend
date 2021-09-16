import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Appquakes.is</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
