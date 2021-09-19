import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="wrapper__content about">
      <h2>About Appquakes.is:</h2>
      <p>
        Appquakes.is is the first service that provides data about earthquakes
        in Iceland. <br />
        In the table on the <Link to="/">Homepage</Link> you can find data
        ordered by the most recent event to the oldest one.
      </p>
      <p>
        It is possible to select the refresh time from the drop-down menu to
        stay up to date. It isn't initially set.
      </p>
      <p>
        Hope you enjoy it!
      </p>
    </div>
  );
};

export default About;
