// Adapted from https://reactnavigation.org/docs/auth-flow
import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {AuthManager} from '../auth/AuthManager';

//Denne komponent, er her man kan logge ind
export default class SignInScreen extends React.Component {
  static contextType = NavigationContext;

  static navigationOptions = {
    title: 'Please sign in',
  };
  // Asynkron kald som henter metoden fra Authmanager
  _signInAsync = async () => {
    const navigation = this.context;
    //prøver at lave et kalder til signInAsycn, hvis det lykkes routeres den til vores main som er vores DrawerMenu ellers skal den slå fejl
    try {
      await AuthManager.signInAsync();

      navigation.reset({
        index: 0,
        routes: [{name: 'Main'}],
      });
    } catch (error) {
      Alert.alert(
        'Error signing in',
        JSON.stringify(error),
        [
          {
            text: 'OK',
          },
        ],
        {cancelable: false},
      );
    }
  };

  render() {
    const navigation = this.context;
    navigation.setOptions({
      title: 'Digital Studiekort',
      headerShown: true,
    });

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/cbs.jpg')}
          style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.textStyle}>Welcome to digitale studiekort</Text>
            <Button title="Log in with mail" onPress={this._signInAsync} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 100,
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    resizeMode: 'cover',
  },
  overlay: {
    opacity: 0.6,
    backgroundColor: 'black',
    flex: 1,
  },
});
