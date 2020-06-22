import * as React from 'react';
import { Image, Button, StyleSheet, Text, Dimensions, View, ScrollView } from 'react-native';
import MovieList from '../../components/MovieList';

export default function DetailsScreen({route,navigation}) {
  const [movie, setMovie] = React.useState();
  React.useEffect(() =>{
      fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=debfa0037881857def6d74b243adf4a3&language=en-US`)
      .then(res => res.json())
      .then(result => {
        setMovie(result);
        navigation.setOptions({ title: result.title });
      })
  },[])
  return (
    <ScrollView style={styles.container}>
      {movie ? 
      <View style={styles.innerContainer}>
        <Image style={styles.poster} source={{uri:`http://image.tmdb.org/t/p/w500${movie.poster_path}`}}/>
        <Text style={styles.details}>Movie Details</Text>
        <Text>{movie.overview}</Text>
        <Button 
          onPress={()=>{navigation.navigate('Player',{videoID:route.params.id})}}
          title="Play Movie"
        />
        <Button 
          onPress={()=>{}}
          title="Add To Library"
        />
        <MovieList navigation={navigation} title={"Recommendations"} url={`https://api.themoviedb.org/3/movie/${route.params.id}/recommendations?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page=`}/>
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
//https://api.themoviedb.org/3/movie/454626?api_key=debfa0037881857def6d74b243adf4a3&language=en-US
// reccomendations https://api.themoviedb.org/3/movie/454626/recommendations?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page=1