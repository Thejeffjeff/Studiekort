/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Button,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerToggle, headerOptions} from '../menus/HeaderComponents';
import {GraphManager} from '../graph/GraphManager';
import CameraComponent from './Camera';

const Stack = createStackNavigator();
const UserState = React.createContext({
  userLoading: true,
  userName: '',
  userEmail: '',
});

type HomeScreenState = {
  userLoading: boolean;
  userName: string;
  userEmail: string;
};

//Funktionen skal navigere til komponenten "DetailScreen"

const HomeComponent = () => {
  const userState = React.useContext(UserState);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/cbslogo.png')} />
      <ActivityIndicator animating={userState.userLoading} size="large" />
      {userState.userLoading ? null : (
        <Text style={styles.heading}>Hello {userState.userName}! </Text>
      )}

      <View style={styles.row}>
        <Text style={styles.label}>Universitet: </Text>
        <Text> Copenhagen Business School (CBS) </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Birthday: </Text>
        <Text> xxxxxx </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Mail: </Text>
        <Text> {userState.userEmail} </Text>
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Picture is not added</Text>
        <Button title="Upload" onPress={() => {}} />
        {/* ffew
        <Image
          style={styles.image}
          source={require('../assets/studentcard_example.jpeg')}
        />
        */}
      </View>
    </View>
  );
};

interface Props {
  navigation: any;
}
export default class HomeScreen extends React.Component {
  state: HomeScreenState = {
    userLoading: true,
    userName: '',
    userEmail: '',
  };

  async componentDidMount() {
    try {
      // Get the signed-in user from Graph
      const user = await GraphManager.getUserAsync();
      const photo = await GraphManager.getUserPhotoAsync();

      // Set the user name to the user's given name
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        userName: user.displayName,
        userLoading: false,
        userEmail: user.mail !== null ? user.mail : user.userPrincipalName,
        userPhoto: photo.profilePhoto,
      });
    } catch (error) {
      Alert.alert(
        'Error getting user',
        JSON.stringify(error),
        [
          {
            text: 'OK',
          },
        ],
        {cancelable: false},
      );
    }
  }
  render() {
    return (
      <UserState.Provider value={this.state}>
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen
            name="home"
            component={HomeComponent}
            options={{
              title: 'Welcome',
              headerLeft: () => <DrawerToggle />,
            }}
          />
          <Stack.Screen name="Camera" component={CameraComponent} />
        </Stack.Navigator>
      </UserState.Provider>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    textAlign: 'left',
    letterSpacing: 5,
    textDecorationColor: '#fff',
    paddingLeft: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    height: 30,
    margin: 10,
    textAlign: 'left',
    marginLeft: 19,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
  },
  image: {
    width: 325,
    height: 200,
    resizeMode: 'contain',
  },
  logo: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
  },
});
