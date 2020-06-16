import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase/app';

import Home from '../Home';
import Search from '../Search';
import Settings from '../Settings';

import 'firebase/auth';

// import { Container } from './styles';

const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [userState, setUserState] = useState(firebase.auth().currentUser);

  useEffect(() => {
    // Check if user is login
    if (!userState) {
      // navigate to user long screen
      navigation.navigate('Login');
    } else {
      navigation.navigate('Dashboard');
    }
  }, [userState]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0081a7',
        inactiveTintColor: 'gray',
        style: {
          // Adição do style
          backgroundColor: '#22223b', // Aplicando a cor ao background
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22223b',
  },
});
