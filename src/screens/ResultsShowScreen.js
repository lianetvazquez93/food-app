import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import useSelectedResult from "../hooks/useSelectedResult";

const ResultsShowScreen = ({ navigation }) => {
  const result = useSelectedResult(navigation.getParam("id"));

  return result ? (
    <View>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 5,
    borderRadius: 4,
    alignSelf: "center",
  },
});

export default ResultsShowScreen;
