import useFetch from "./api/useFetch";
import EarthquakesList from "./EarthquakesList";

const Home = () => {
  const {
    data: earthquakes,
    isPending,
    error,
  } = useFetch("https://apis.is/earthquake/is"); //GET data

  return (
    <div className="wrapper__content home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {earthquakes && <EarthquakesList earthquakes={earthquakes} title="My blogs" />}
    </div>
  );
};

export default Home;
