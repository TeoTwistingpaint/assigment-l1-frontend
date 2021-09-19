import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="wrapper__content not-found">
      <h2>Sorry</h2>
      <p>The page doesn't exist. Maybe an earthquake destroyed it.</p>
      <Link to="/"><span>Back to home</span></Link>
    </div>
  );
};

export default NotFound;
