import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as firebase from 'firebase/app';
import 'firebase/auth';

const Loading: React.FC = () => {
  const navigation = useNavigation();

  const user = firebase.auth().currentUser;
  useEffect(() => {
    // Check if user is login
    if (!user) {
      // navigate to user long screen
      navigation.navigate('Login');
    } else {
      navigation.navigate('Dashboard');
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312e38',
  },
});
