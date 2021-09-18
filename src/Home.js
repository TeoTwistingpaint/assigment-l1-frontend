import useFetch from "./api/useFetch";
import EarthquakesList from "./EarthquakesList";
import { useState } from "react";

const Home = () => {
  const [delay, setDelay] = useState(null);

  const handleOnChange = (e) => {
    if (e.target.value === "null") {
      setDelay(null);
    } else {
      setDelay(e.target.value);
    }
  };

  const {
    data: earthquakes,
    isPending,
    error,
    reload,
  } = useFetch("https://apis.is/earthquake/is", { refetchIntervall: delay }); //GET data

  return (
    <div className="wrapper__content home">
      <label htmlFor="standard-select">Select a refresh time</label>
      <div className="select">
        <select id="standard-select" onChange={handleOnChange}>
          <option value="null" defaultValue>
            No refresh
          </option>
          <option value="5000">5 seconds</option>
          <option value="30000">30 seconds</option>
          <option value="60000">1 minute</option>
          <option value="300000">5 minutes</option>
          <option value="600000">10 minutes</option>
        </select>
        <span className="focus"></span>
      </div>
      {error && <div className="state state--error">{error}</div>}
      {isPending && <div className="state state--loading">Loading...</div>}
      {earthquakes && <EarthquakesList earthquakes={earthquakes} />}
    </div>
  );
};

export default Home;
