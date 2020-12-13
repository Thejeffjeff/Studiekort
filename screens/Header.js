import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {TouchableOpacity, StyleSheet, SafeAreaView, Text} from 'react-native';

//Denne komponent er opsætningen af headeren, som tager en props som er title, som gør det muligt at navgive headeren, når den kaldes.
//Grunden til at findes to header skyldes at den ene som er TS kommer fra Microsft graph og kan ikke implementeres på en komponent som er en JS typefil.

export default class Header extends Component {
  handleNavigation = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    const {title} = this.props;
    return (
      <SafeAreaView style={styles.container}>
               {/*Når der trykkes aktiveres handleNavigation*/}
        <TouchableOpacity style={styles.icon} onPress={this.handleNavigation}>
          <Icon
            iconStyle={{marginLeft: 10, color: 'white'}}
            size={30}
            name="menu"
          />
        </TouchableOpacity>
        <Text style={styles.txt}>{title}</Text>
      </SafeAreaView>
    );
  }
}

export const headerOptions = {
  headerStyle: {
    backgroundColor: '#276b80',
  },
  headerTintColor: 'white',
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#276b80',
  },
  icon: {
    width: '15%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  txt: {
    width: '85%',
    textAlign: 'center',
    paddingRight: 66,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 17,
  },
});
