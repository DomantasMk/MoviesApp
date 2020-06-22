import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import BrowseScreen from '../screens/Movies/BrowseScreen';
import BrowseTVScreen from '../screens/TVSeries/BrowseTVScreen';
import BrowseActorsScreen from '../screens/Actors/BrowseActorsScreen';


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <BottomTab.Navigator initialRouteName={'BrowseMovies'}>
      <BottomTab.Screen
        name="BrowseMovies"
        component={BrowseScreen}
        options={{
          title: 'Movies',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-film" />,
        }}
      />
      <BottomTab.Screen
        name="BrowseSeries"
        component={BrowseTVScreen}
        options={{
          title: 'Series',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-tv" />,
        }}
      />
      <BottomTab.Screen
        name="BrowseActors"
        component={BrowseActorsScreen}
        options={{
          title: 'Actors',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
