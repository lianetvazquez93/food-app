import { useState, useEffect } from "react";
import yelp from "../api/yelp";
import { Result } from "./useSelectedResult";

export default () => {
  const [results, setResults] = useState<Result[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const searchApi = async (searchTerm: string): Promise<void> => {
    try {
      const { data } = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "berlin",
        },
      });
      setResults(data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage] as const;
};
