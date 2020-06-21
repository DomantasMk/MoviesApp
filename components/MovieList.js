import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
export default function MovieList({ navigation, url, title }) {
    const [movies, setMovies] = React.useState();
    const [page, setPage] = React.useState(1);
    React.useEffect(() =>{
        if(url){
            fetch(`${url}${page}`)
            .then(res => res.json())
            .then(result => setMovies(result.results))
        }
    },[page])
  return (
      <View >
        {movies ? 
      <View style={styles.container}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <ScrollView style={styles.container} horizontal={true}>
            {movies.map(movie => <TouchableOpacity key={movie.id} onPress={() =>{navigation.push('Details',{id:movie.id})}} style={styles.movie}><Image style={styles.poster} source={{uri:`http://image.tmdb.org/t/p/w400${movie.poster_path}`}}/><Text>{movie.title.substr(0,30)}{movie.title.length > 30 ? "...":""}</Text></TouchableOpacity>)}
        </ScrollView>
      </View> 
      : <View><Text>Loading...</Text></View>}
      </View>
  );
}


var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height
//marginBottom:deviceHeight * 6 / 100,

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movie:{
    paddingRight:15,
  },
  categoryTitle:{
      fontSize:20,
  },
  poster: {
    width: 200,
    height: 300,
  },

});
