import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import bottomTabNavigator from '../navigation/BottomTabNavigator';
import DetailsScreen from '../screens/Movies/DetailsScreen';
import DetailsTVScreen from '../screens/TVSeries/DetailsTVScreen';
import PlayerScreen from '../screens/Movies/PlayerScreen';
import PlayerScreenTV from '../screens/TVSeries/PlayerScreenTV';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Browse" component={bottomTabNavigator}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="DetailsTV" component={DetailsTVScreen}/>
        <Stack.Screen name="Player" component={PlayerScreen}/>
        <Stack.Screen name="PlayerTV" component={PlayerScreenTV}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}