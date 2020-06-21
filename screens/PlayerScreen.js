import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';


export default function PlayerScreen({route}) {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [trailers, setTrailers] = useState();
  useEffect(() =>{
    if(route.params){
        fetch(`https://api.themoviedb.org/3/movie/${route.params.videoID}/videos?api_key=debfa0037881857def6d74b243adf4a3&language=en-US`)
        .then(res => res.json())
        .then(result => setTrailers(result.results.filter(movie => movie.site =="YouTube")))
    }
},[])
  return (
    <View style={styles.container}>
       {trailers ? 
       <YoutubePlayer
        ref={playerRef}
        height={300}
        width={400}
        videoId={trailers[0].key}
        play={playing}
        onChangeState={event => console.log(event)}
        onReady={() => console.log("ready")}
        onError={e => console.log(e)}
        onPlaybackQualityChange={q => console.log(q)}
        volume={50}
        playbackRate={1}
        playerParams={{
          cc_lang_pref: "us",
          showClosedCaptions: true
        }}
      /> : <Text>Searching for movies</Text>}
    </View>
  );
}

PlayerScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center",
  },
});
