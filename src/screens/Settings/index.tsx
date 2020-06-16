import React, { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as firebase from 'firebase/app';

// import { Container } from './styles';

const Settings: React.FC = () => {
  const [userState, setUserState] = useState(firebase.auth().currentUser);
  const navigation = useNavigation();

  const handleLogout = useCallback(async () => {
    await firebase.auth().signOut();
    await setUserState('');

    navigation.navigate('Login');
  }, [userState]);

  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <Button title="Sign out" onPress={() => handleLogout()} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22223b',
  },
});
