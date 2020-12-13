// Adapted from https://reactnavigation.org/docs/auth-flow
import React from 'react';
import {ActivityIndicator, Text, StyleSheet, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

//Det er godkendelse af login. Det er den som tager imod en token og derfra loader videre til mainscreen(HomeScreen).
//Dette kan kun lad sig gøre, hvis de rigtig informationer af brugeren er indtastet

export default class AuthLoadingScreen extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  // NOTE: Production apps should protect user tokens in secure storage.
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    const navigation = this.context;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.reset({
      index: 0,
      routes: [{name: userToken ? 'Main' : 'SignIn'}],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={styles.statusText}>Logging in...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    marginTop: 10,
  },
});
