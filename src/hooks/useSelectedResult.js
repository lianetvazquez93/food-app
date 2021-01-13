import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (id) => {
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return result;
};
