import { useState, useEffect, useRef } from "react";
import useInterval from "../useInterval";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const useFetch = (url, { refetchIntervall = null } = {}) => {
  const [state, setState] = useState({
    status: STATUS.IDLE,
    data: null,
    error: null,
  });

  const abortContrRef = useRef(new AbortController());

  useInterval(reload, refetchIntervall);

  useEffect(() => {
    reload();
    return () => abortContrRef.current.abort(); //fetch's abort if I change page rapidly while is doing it
  }, [url]); //brackets allow to fire the function only when the element isnide change. Otherwise, it fires only at first loading

  function reload() {
    setState((state) => ({ ...state, status: STATUS.LOADING }));

    fetch(url, { signal: abortContrRef.current.signal })
      .then((res) => {
        if (!res.ok) {
          //if problems fetching data, throws error
          throw Error("Impossible to retrieve data");
        }
        return res.json();
      })
      .then((data) => {
        data.results.sort(function (x, y) {
          return x.timestamp - y.timestamp;
        });
        //after retrieving data, set the earthquakes' state
        setState({ data: data.results, status: STATUS.SUCCESS, error: null });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          //if the fetch error is caused by our abort for fast change page, block the state's update that doesn't exist (isPending and setError)
          console.log("abort");
        } else {
          setState((state) => ({
            error: err.message,
            status: STATUS.ERROR,
            data: state.data,
          }));
        }
      });
  }

  return {
    data: state.data,
    isPending: state.status === STATUS.IDLE || state.status === STATUS.LOADING,
    error: state.error,
    reload,
  };
};

export default useFetch;
