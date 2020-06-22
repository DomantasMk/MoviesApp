import * as React from 'react';
import { Image, Button, StyleSheet, Text, Dimensions, View, ScrollView } from 'react-native';
import SeriesList from '../../components/SeriesList';

export default function DetailsTVScreen({route,navigation}) {
  const [series, setSeries] = React.useState();
  React.useEffect(() =>{
      fetch(`https://api.themoviedb.org/3/tv/${route.params.id}?api_key=debfa0037881857def6d74b243adf4a3&language=en-US`)
      .then(res => res.json())
      .then(result => {
        setSeries(result);
        navigation.setOptions({ title: result.name });
      })
  },[])
  return (
    <ScrollView style={styles.container}>
      {series ? 
      <View style={styles.innerContainer}>
        <Image style={styles.poster} source={{uri:`http://image.tmdb.org/t/p/w500${series.poster_path}`}}/>
        <Text style={styles.details}>Movie Details</Text>
        <Text>{series.overview}</Text>
        <Button 
          onPress={()=>{navigation.navigate('PlayerTV',{videoID:route.params.id})}}
          title="Play Series"
        />
        <Button 
          onPress={()=>{}}
          title="Add To Library"
        />
        <SeriesList navigation={navigation} title={"Recommendations"} url={`https://api.themoviedb.org/3/tv/${route.params.id}/recommendations?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page=`}/>
      </View> 
      : <View><Text>Loading...</Text></View>}
    </ScrollView>
  );
}

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer:{
    margin: 10,
  },
  details:{
    marginTop:10,
    marginBottom:10,
    fontSize:20,
  },
  poster:{
    width:deviceWidth * 95 / 100,
    height:deviceHeight * 60 / 100,
  }
});