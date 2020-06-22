import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import SeriesList from "../../components/SeriesList";
import { urlsSeries } from "../../assets/utils/UrlsMovieAPI";

export default function BrowseTVScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={urlsSeries}
        renderItem={({ item }) => (
          <SeriesList
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
