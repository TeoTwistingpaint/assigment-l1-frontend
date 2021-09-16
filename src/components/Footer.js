import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="logo">
        <Link to="/">
          <h1>Appquakes.is</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
