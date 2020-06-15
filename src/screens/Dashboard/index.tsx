import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as firebase from 'firebase/app';
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

  const handleLogout = useCallback(async () => {
    await firebase.auth().signOut();
    await setUserState('');

    navigation.navigate('Login');
  }, [setUserState]);

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="Sign out" onPress={() => handleLogout()} />
    </View>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
