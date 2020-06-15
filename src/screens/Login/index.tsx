import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loading, setLoading] = useState(0);
  const navigation = useNavigation();

  const [userState, setUserState] = useState(firebase.auth().currentUser);

  useEffect(() => {
    // Check if user is login
    console.log('montando login');
    if (!userState) {
      // navigate to user long screen
      navigation.navigate('Login');
    } else {
      navigation.navigate('Dashboard');
    }
  }, [userState]);

  const handleLogin = useCallback(async () => {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(emailInput, passwordInput)
      .catch(function (error) {
        console.log(error);
      });

    setUserState(firebase.auth().currentUser);

    if (userState) {
      navigation.navigate('Dashboard');
    }
  }, [emailInput, passwordInput, userState]);

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        autoCompleteType="email"
        onChangeText={text => setEmailInput(text)}
        value={emailInput}
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="sua senha"
        onChangeText={text => setPasswordInput(text)}
        autoCapitalize="none"
        value={passwordInput}
      />
      <TextInput />
      {}
      <Button
        onPress={() => handleLogin()}
        title="Login"
        color="#05668d"
        accessibilityLabel="Learn more about this purple button"
      />

      <ActivityIndicator size="large" color="#05668d" />
      <TextInput />
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8d99ae',
  },
  input: {
    width: 200,
    height: 60,
    backgroundColor: '#232129',
    borderRadius: 10,
    color: '#fff',
    paddingLeft: 10,
    marginBottom: 15,
  },
});
