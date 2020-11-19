import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  Button,
  SafeAreaView,
} from 'react-native';
import Header from './Header';
import {Icon} from 'react-native-elements';

export default class Studierabat extends Component {
  //Denne del rendere skærmen
  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Header
            navigation={this.props.navigation}
            title="Student Discount"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{color: 'white'}}
          />
          <View style={(styles.ViewStyle, {height: this.startHeaderHeight})}>
            {/*Her opsættes en TextInput som skal være appens søgemaskine*/}
            <View style={styles.searchBar}>
              <Icon name="search" size={20} style={{marginRight: 10}} />
              <TextInput
                placeholder="Search"
                placeholderTextColor="grey"
                style={styles.inputText}
              />
            </View>
            <View style={styles.textContainer}>
              <Text>Her skal lokation placeres</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  textContainer: {
    flex: 0,
    marginTop: 200,
    alignItems: 'center',
    height: 100,
  },
  container: {
    flex: 1,
    marginTop: 15,
  },
  searchBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    shadowOffset: {widht: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 1,
    marginTop: Platform.OS == 'andorid' ? 40 : null,
  },
  map: {flex: 1},
  infoBox: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 20,
  },
});
