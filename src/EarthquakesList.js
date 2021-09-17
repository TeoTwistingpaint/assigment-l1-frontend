import Table from "./components/Table";

const EarthquakesList = ({ earthquakes }) => {
  return (
    <div className="earthquakes-list">
      <Table earthquakes={earthquakes} />
    </div>
  );
};

export default EarthquakesList;
