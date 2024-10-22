import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

type RootNavegationParamList = {
  WelcomeScreen: undefined,
  EventDetailScreen: undefined,
}

const Stack = createNativeStackNavigator<RootNavegationParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen}
          options={
            {
              headerShown: true,
              title: 'Bienvenido',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'red',
              },
            }
          }  
        />
        <Stack.Screen 
          name="EventDetailScreen" 
          component={EventDetailScreen} 
          options={
            {
              headerShown: true,
              title: 'Evento',
              headerBackTitleVisible: true,
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation