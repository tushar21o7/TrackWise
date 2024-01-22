import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const useFetch = (url, method = "get", body = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    let resp;
    if (method === "get") {
    } else if (method === "post") {
      // resp = await axios.post(url, body);
    } else if (method === "post") {
    } else {
    }
  };

  useEffect(() => {
    let res;
  }, []);

  return { isLoading, isError, data };
};

export default useFetch;
