import React, { useEffect, useState } from "react";
import axios from "axios";

//only runs when the [url] variable changes.
export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({ loading: true, data: null, error: false });

    axios
      .get(url)
      .then((response) => {
        setRequest({ loading: false, data: response.data, error: false });
      })
      .catch((error) => {
        //no need to use error here, but if an api has a good error response then we can get the error here.
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}
