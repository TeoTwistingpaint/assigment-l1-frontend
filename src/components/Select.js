const Select = ({ handleOnChange }) => {

  return (
    <>
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
      </>
  );
};

export default Select;
