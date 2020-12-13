// Adapted from https://reactnavigation.org/docs/auth-flow
import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignInScreen from './screens/SignInScreen';
import DrawerMenuContent from './menus/DrawerMenu';

//Dette er Appkomponenten, som sætter strukturen af hele applikationen.

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

//AuthStackComponent som bliver kaldt længere nede. Komponenten er opbygningen på appliaktionen, hvor der initialiseres authLoadingScreen som start..
const AuthStackComponent = ({navigation}: Props) => {
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <AuthStack.Navigator initialRouteName="AuthLoading">
      <AuthStack.Screen name="AuthLoading" component={AuthLoadingScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="Main" component={DrawerMenuContent} />
    </AuthStack.Navigator>
  );
};

//En NavigationContainer som indebære en Navigator samt en stackNavigator.
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="AuthStack" component={AuthStackComponent} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
