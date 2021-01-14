import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [
    costEffective,
    bitPricier,
    bigSpender,
    searchApi,
    errorMessage,
  ] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={costEffective} title="Cost Effective" />
        <ResultsList results={bitPricier} title="Bit Pricier" />
        <ResultsList results={bigSpender} title="Big Spender!" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
