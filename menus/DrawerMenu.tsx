import React, {FC} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Alert,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {NavigationContext} from '@react-navigation/native';
import {AuthManager} from '../auth/AuthManager';
import CalendarScreen from '../screens/CalendarScreen';
import {GraphManager} from '../graph/GraphManager';
import About from '../screens/About';
import Settings from '../screens/Settings';
import Studierabat from '../screens/Studierabt';
import HomeScreen from '../screens/HomeScreen';

//Denne komponenter sikre side-menu på applikationen. Det er også her, hvor man kan navigerer rundt til de forskellie komponenter.

const Drawer = createDrawerNavigator();

type CustomDrawerContentProps = DrawerContentComponentProps & {
  userName: string;
  userEmail: string;
  userPhoto: ImageSourcePropType;
  signOut: () => void;
};

type DrawerMenuState = {
  userName: string;
  userEmail: string;
  userPhoto: ImageSourcePropType;
};

const CustomDrawerContent: FC<CustomDrawerContentProps> = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.profileView}>
      <Image
        source={props.userPhoto}
        resizeMode="contain"
        style={styles.profilePhoto}
      />
      <Text style={styles.profileUserName}>{props.userName}</Text>
      <Text style={styles.profileEmail}>{props.userEmail}</Text>
    </View>
    <DrawerItemList {...props} />
    <DrawerItem label="Log out" onPress={props.signOut} />
  </DrawerContentScrollView>
);

export default class DrawerMenuContent extends React.Component {
  static contextType = NavigationContext;

  async componentDidMount() {
    try {
      // Get the signed-in user from Graph
      const user = await GraphManager.getUserAsync();

      // Update UI with display name and email
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        userName: user.displayName,
        // Work/School accounts have email address in mail attribute
        // Personal accounts have it in userPrincipalName
        userEmail: user.mail !== null ? user.mail : user.userPrincipalName,
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

  state: DrawerMenuState = {
    // TEMPORARY
    userName: 'Adele Vance',
    userEmail: 'adelev@contoso.com',
    userPhoto: require('../assets/office.jpg'),
  };

  _signOut = async () => {
    const navigation = this.context;

    // Sign out
    await AuthManager.signOutAsync();

    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  };

  render() {
    const navigation = this.context;
    navigation.setOptions({
      headerShown: false,
    });

    return (
      <Drawer.Navigator
        drawerType="front"
        drawerContent={(props) => (
          <CustomDrawerContent
            {...props}
            userName={this.state.userName}
            userEmail={this.state.userEmail}
            userPhoto={this.state.userPhoto}
            signOut={this._signOut}
          />
        )}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name="Calender"
          component={CalendarScreen}
          options={{drawerLabel: 'Calender'}}
        />
        <Drawer.Screen
          name="Student Discount"
          component={Studierabat}
          options={{drawerLabel: 'Student Discount'}}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{drawerLabel: 'Settings'}}
        />
        <Drawer.Screen
          name="About us"
          component={About}
          options={{drawerLabel: 'About us'}}
        />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileView: {
    alignItems: 'center',
    padding: 10,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileUserName: {
    fontWeight: '700',
  },
  profileEmail: {
    fontWeight: '200',
    fontSize: 10,
  },
});
