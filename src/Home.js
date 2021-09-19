import useFetch from "./api/useFetch";
import EarthquakesList from "./EarthquakesList";
import Select from "./components/Select";
import Info from "./components/Info";
import { Link } from "react-router-dom";
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
      <Info />
      {error && <div className="state state--error">{error}</div>}
      {isPending && <div className="state state--loading">Loading...</div>}
      {!error && <Select handleOnChange={handleOnChange} />}
      {earthquakes && <EarthquakesList earthquakes={earthquakes} />}
    </div>
  );
};

export default Home;
