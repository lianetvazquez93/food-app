import { useState, useEffect } from "react";
import yelp from "../api/yelp";
import { Result } from "./useSelectedResult";
import filterResultsByPrice from "../helpers/filterResultsByPrice";

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

  const costEffective = filterResultsByPrice(results, "€");
  const bitPricier = filterResultsByPrice(results, "€€");
  const bigSpender = filterResultsByPrice(results, "€€€");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [
    costEffective,
    bitPricier,
    bigSpender,
    searchApi,
    errorMessage,
  ] as const;
};
