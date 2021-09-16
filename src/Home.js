import useFetch from "./api/useFetch";

const Home = () => {
  const {
    data: earthquakes,
    isPending,
    error,
  } = useFetch("https://apis.is/earthquake/is"); //GET data

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      
    </div>
  );
};

export default Home;
