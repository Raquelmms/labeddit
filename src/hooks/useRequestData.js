import { useEffect, useState } from "react";
import axios from "axios";

export function useRequestData(url) {
  const [data, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  useEffect(() => {
    getData(url);
    },[url]);


  const getData = (url) => {

    setLoading(true);
    axios
      .get(url, {
          headers: {
            Authorization: window.localStorage.getItem("token")
          }
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        alert(error.response.data.message)
        setError(error);
        setLoading(false);
      });
  };

  return [data, isLoading, error, getData];
};