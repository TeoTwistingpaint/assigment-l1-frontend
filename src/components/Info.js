import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <div className="info">
        <p>
          Welcome! <br />
          Check out the <Link to="/about">about page</Link> to know more about
          Appquakes.is.
        </p>
      </div>
    </>
  );
};

export default Info;
