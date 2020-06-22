import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, Dimensions, View, TouchableOpacity, FlatList } from 'react-native';
export default function MovieList({ navigation, url, title }) {
    const [series, setSeries] = React.useState();
    const [page, setPage] = React.useState(1);
    React.useEffect(() =>{
        if(url){
            fetch(`${url}${page}`)
            .then(res => res.json())
            .then(result => 
              {
                //Only save the fields we need for optimization purposes
                const results = result.results.map((({ id, poster_path, name }) => ({ id, poster_path, name })))
                if(series)
                {
                  setSeries([...series,...results]);
                }
                else
                {
                    
                  setSeries(results);
                }
              })
        }
    },[page])

    return (
        <View >
          {series ? 
        <View style={styles.container}>
          <Text style={styles.categoryTitle}>{title}</Text>
          <FlatList
            data={series}
            renderItem={({item}) => <TouchableOpacity onPress={() =>{navigation.push('DetailsTV',{id:item.id})}} style={styles.movie}><Image style={styles.poster} source={{uri:`http://image.tmdb.org/t/p/w400${item.poster_path}`}}/><Text>{item.name.substr(0,26)}{item.name.length > 30 ? "...":""}</Text></TouchableOpacity>}
            keyExtractor={(item,index)=> index.toString()}
            horizontal={true}
            onEndReached={() =>{setPage(page+1)}}
          />
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