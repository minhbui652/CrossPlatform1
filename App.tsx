/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StartScreen } from './src/screens/StartScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartScreen'>
        <Stack.Screen name='StartScreen' component={StartScreen} 
        options = {{title:'StartScreen', headerStyle: {backgroundColor: '#560cce'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen} 
        options = {{title:'StartScreen', headerStyle: {backgroundColor: '#560cce'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} 
        options = {{title:'StartScreen', headerStyle: {backgroundColor: '#560cce'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;  