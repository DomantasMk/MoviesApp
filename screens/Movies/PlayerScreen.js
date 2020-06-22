import { StyleSheet, Text, View } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';


export default function PlayerScreen({route}) {
  const playerRef = useRef(null);
  const [playing] = useState(true);
  const [trailers, setTrailers] = useState();
  useEffect(() =>{
    if(route.params){
        fetch(`https://api.themoviedb.org/3/movie/${route.params.videoID}/videos?api_key=debfa0037881857def6d74b243adf4a3&language=en-US`)
        .then(res => res.json())
        .then(result => {
          if(result.results){
            setTrailers(result.results.filter(movie => movie.site =="YouTube"))
          }else{
            setTrailers([])
          }
        })
    }
},[])
  return (
    <View style={styles.container}>
       {trailers ? 
        trailers.length > 0 ?<YoutubePlayer
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
      />: <Text style={styles.text}>No trailers found</Text> : <Text style={styles.text}>Searching for trailers</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    color:"white",
    fontSize:25
  }
});
