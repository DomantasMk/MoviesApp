import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import MovieList from "../../components/MovieList";
import SimpleButton from "../../components/SimpleButton";

export default function DetailsScreen({ route, navigation }) {
  const [movie, setMovie] = React.useState();
  //to do:
  //Add some logic to cancel fetch requests on componentWillUnmount
  //Reason: Possible memory leak if the user leaves the screen before we get the response 
  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=debfa0037881857def6d74b243adf4a3&language=en-US`
    )
      .then((res) => res.json())
      .then((result) => {
        setMovie(result);
        navigation.setOptions({ title: result.title });
      });
  }, []);
  return (
    <ScrollView style={styles.container}>
      {movie ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.poster}
            source={{
              uri: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
          />
          <Text style={styles.details}>Movie Details</Text>
          <Text>{movie.overview}</Text>
          <View style={styles.button}>
            <SimpleButton
              onPress={() => {
                navigation.navigate("Player", { videoID: route.params.id });
              }}
              text="Play Trailer"
            />
          </View>
          <View style={styles.button}>
            <SimpleButton onPress={() => {}} text="Add To Library" />
          </View>

          <MovieList
            navigation={navigation}
            title={"Recommendations"}
            url={`https://api.themoviedb.org/3/movie/${route.params.id}/recommendations?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page=`}
          />
        </View>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </ScrollView>
  );
}

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    margin: 10,
  },
  details: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  button:{
    marginTop: 10,
    marginBottom: 10,
  },
  poster: {
    width: (deviceWidth * 95) / 100,
    height: (deviceHeight * 60) / 100,
  },
});