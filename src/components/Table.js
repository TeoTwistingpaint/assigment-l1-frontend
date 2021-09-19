const Table = ({ earthquakes }) => {
  const TableHeaderRow = () => {
    return (
      <tr>
        <th>Time</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Depth</th>
        <th>Size</th>
        <th>Quality</th>
        <th>Location</th>
      </tr>
    );
  };

  const TableRow = ({ data }) => {
    return data.map((data, i) => (
      <tr key={i}>
        <td>{data.timestamp}</td>
        <td>{data.latitude}</td>
        <td>{data.longitude}</td>
        <td>{data.depth}</td>
        <td>{data.size}</td>
        <td>{data.quality}</td>
        <td>{data.humanReadableLocation}</td>
      </tr>
    ));
  };

  const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <TableHeaderRow />
          <TableRow data={data} />
        </tbody>
      </table>
    );
  };
  return (
    <div className="table">
      <Table data={earthquakes} />
    </div>
  );
};

export default Table;
