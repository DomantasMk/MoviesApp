import * as React from "react";
import { StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";

import MainNavigator from "./navigation/MainStackNavigator";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
