import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import bottomTabNavigator from '../navigation/BottomTabNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import PlayerScreen from '../screens/PlayerScreen';

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
        <Stack.Screen name="Player" component={PlayerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}