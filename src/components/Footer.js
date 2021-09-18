import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="logo">
          <Link to="/">
            <h1>Appquakes.is</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
