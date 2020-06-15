import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase/app';
import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Home from './src/screens/Home';

import { firebaseConfig } from './src/config/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Auth = createStackNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#312e38',
        },
      }}
    >
      <Auth.Screen name="SignIn" component={Loading} />
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Dashboard" component={Dashboard} />
      <Auth.Screen name="Home" component={Home} />
    </Auth.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
