import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import SeriesList from '../../components/SeriesList';

let urls =[
 {title:"Trending Series",key:"1", url:"https://api.themoviedb.org/3/tv/popular?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page="}
,{title:"Top Rated Series",key:"2", url:"https://api.themoviedb.org/3/tv/top_rated?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page="}
,{title:"Airing Now",key:"3",url:"https://api.themoviedb.org/3/tv/on_the_air?api_key=debfa0037881857def6d74b243adf4a3&language=en-US&page="}];

export default function BrowseTVScreen({ navigation}) {
  return (
      <View style={styles.container}>      
        <FlatList
          data={urls}
          renderItem={({item}) => <SeriesList navigation={navigation} title={item.title} url={item.url}/>}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
