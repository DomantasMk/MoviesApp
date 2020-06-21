import * as React from 'react';
import { Image, Platform, StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';

import MovieList from '../components/MovieList';

let urls =[
 {title:"Trending movies",key:"1", url:"https://api.themoviedb.org/3/movie/popular?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page="}
,{title:"Top Rated Movies",key:"2", url:"https://api.themoviedb.org/3/movie/top_rated?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page="}
,{title:"Now Playing",key:"3",url:"https://api.themoviedb.org/3/movie/now_playing?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page="}];

export default function BrowseScreen({route, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/*urls.map((data,i) => <View key={i}><MovieList navigation={navigation} title={data.title} url={data.url}/></View>)*/}
      <View>      
        <FlatList
          data={urls}
          renderItem={({item}) => <MovieList navigation={navigation} title={item.title} url={item.url} key={item.key}/>}
        />
      </View>

    </SafeAreaView>
  );
}

BrowseScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem:{
   
  }
});
