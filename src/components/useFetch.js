import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data from the source");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
