import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
export default function MovieList({ navigation, url, title }) {
    const [movies, setMovies] = React.useState();
    const [page, setPage] = React.useState(1);
    const [offsetX, setOffset] = React.useState(0);
    let scrollViewRef = React.useRef(null);
    //notes for myself
    //maybe try destructuring gotten json and only save required data
    //try swapping out simeple map to flatlist or another react native list
    //right now gets laggy at 200
    //clean up code a lil bit
    //remove console log on useEffect
    React.useEffect(() =>{
        if(url){
            fetch(`${url}${page}`)
            .then(res => res.json())
            .then(result => 
              {
                if(movies)
                {
                  //if(movies.length > 40){
                  //  let slicedMovies = movies.slice(15);
                  //  setMovies([...slicedMovies,...result.results]);
                  //}else{
                  setMovies([...movies,...result.results]);
                  console.log(movies.length);
                  //}

                }
                else
                {
                  setMovies(result.results);
                }
              })
        }
    },[page])
    const isCloseToRight = ({ layoutMeasurement, contentOffset, contentSize }) => {
      const paddingToRight = 20;
      return layoutMeasurement.width + contentOffset.x >= contentSize.width - paddingToRight;
    };
    //const handleSizeChange = (width, height) => {
    //  scrollViewRef.current.scrollTo({ x: offsetX - 4000, y: 0, animated: false }); //snaps to end because offset doesnt really change much fixpls
    //}
    const handleScroll = (event) => {
      if (isCloseToRight(event.nativeEvent)) {
        setPage(page+1);
      }
      //setOffset(event.nativeEvent.contentOffset.x)
    }
    return (
        <View >
          {movies ? 
        <View style={styles.container}>
          <Text style={styles.categoryTitle}>{title}</Text>
          <ScrollView 
          style={styles.container} 
          horizontal={true} 
          onScroll={handleScroll}
          scrollEventThrottle={400}
          ref={scrollViewRef}
          >
          {/*onContentSizeChange={handleSizeChange}*/}
              {movies.map((movie, i) => <TouchableOpacity key={i} onPress={() =>{navigation.push('Details',{id:movie.id})}} style={styles.movie}><Image style={styles.poster} source={{uri:`http://image.tmdb.org/t/p/w400${movie.poster_path}`}}/><Text>{movie.title.substr(0,30)}{movie.title.length > 30 ? "...":""}</Text></TouchableOpacity>)}
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
