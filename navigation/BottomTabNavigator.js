import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import BrowseScreen from '../screens/Movies/BrowseScreen';
import BrowseTVScreen from '../screens/TVSeries/BrowseTVScreen';
import BrowseActorsScreen from '../screens/Actors/BrowseActorsScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'BrowseMovies';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="BrowseMovies"
        component={BrowseScreen}
        options={{
          title: 'Movies',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-film" />,
        }}
        initialParams={{ text: "Movies" }}
      />
      <BottomTab.Screen
        name="BrowseSeries"
        component={BrowseTVScreen}
        options={{
          title: 'Series',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-tv" />,
        }}
        initialParams={{ text: "Series" }}
      />
      <BottomTab.Screen
        name="BrowseActors"
        component={BrowseActorsScreen}
        options={{
          title: 'Actors',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
        initialParams={{ text: "Actors" }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
