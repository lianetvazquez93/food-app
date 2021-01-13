import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import filterResultsByPrice from "../helpers/filterResultsByPrice";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice(results, "€")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice(results, "€€")}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice(results, "€€€")}
          title="Big Spender!"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
