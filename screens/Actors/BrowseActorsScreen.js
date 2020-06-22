import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function BrowseActorsScreen({route, navigation}) {
  return (
      <View style={styles.container}>      
        <Text style={styles.text}>Soon to be implemented</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:"center"
  },
  text:{
      fontSize:25,
  }
});
