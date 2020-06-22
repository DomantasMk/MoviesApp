import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import MovieList from "../../components/MovieList";
import { urlsMovies } from "../../assets/utils/UrlsMovieAPI";

export default function BrowseScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={urlsMovies}
        renderItem={({ item }) => (
          <MovieList
            navigation={navigation}
            title={item.title}
            url={item.url}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
