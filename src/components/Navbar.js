import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="logo">
          <Link to="/">
            <h1>Appquakes.is</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
