import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          //if problems fetching data, throws error
          throw Error("Impossible to retrieve data");
        }
        return res.json();
      })
      .then((data) => {
        //after retrieving data, set the earthquakes' state
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          //if the fetch error is caused by our abort for fast change page, block the state's update that doesn't exist (isPending and setError)
          console.log("abort");
        } else {
          setIsPending(false); //I'm not in waiting anymore to receive data from fetch because of error
          setError(err.message); //set the error
        }
      });

    return () => abortCont.abort(); //fetch's abort if I change page rapidly while is doing it
  }, [url]); //brackets allow to fire the function only when the element isnide change. Otherwise, it fires only at first loading

  return { data, isPending, error };
};

export default useFetch;
