import * as React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
} from "react-native";
import SimpleButton from "../components/SimpleButton";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReactSeals presents</Text>
      <View style={{ marginBottom: (deviceHeight * 2) / 100 }}>
        <SimpleButton
          text={"Browse"}
          onPress={() => {
            navigation.navigate("Browse");
          }}
        />
      </View>
      <SimpleButton text={"Login"} onPress={() => {}} />
    </View>
  );
}

var deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: (deviceHeight * 10) / 100,
  },
  title: {
    fontSize: 20,
    marginBottom: (deviceHeight * 6) / 100,
  },
});
