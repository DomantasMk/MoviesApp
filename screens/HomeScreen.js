import * as React from 'react';
import { Image, Button, StyleSheet, Text, Dimensions, View } from 'react-native';
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReactSeals presents</Text>
      <View style={styles.button}>
        <Button
          onPress={()=>{navigation.navigate('Browse')}}
          title="Browse"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={()=>{navigation.navigate('Player',{videoID:454636})}}
          title="Login"
        />
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
    fontSize:20,
    marginBottom:deviceHeight * 6 / 100,
  },
  button:{
    width : deviceWidth * 40 / 100,
    height: deviceHeight * 6 / 100,
  }

});
