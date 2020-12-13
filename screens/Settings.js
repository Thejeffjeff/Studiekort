import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import Header from './Header';

//Denne komponent rendere indstillinger, som ikke har nogen funktioner.
export default class Settings extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        {/** Header-komponent kaldes, hvor titlen angivnes som settings */}
        <Header
          navigation={this.props.navigation}
          title="Settings"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{color: 'white'}}
        />
        <Image
          source={{
            uri:
              'https://fcda83403961100baa63-6b75d3a70c699e63772caac69eefc7e8.ssl.cf5.rackcdn.com/Article472.jpg',
          }}
          style={styles.container}
        />
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text}>Edit information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text}>Report a problem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text}>Partners</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text}>Dark mode</Text>
          </TouchableOpacity>
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
    flex: 1,
    marginTop: 0,
    alignItems: 'center',
    height: 100,
  },
  buttonStyle: {
    margin: 1,
    padding: 20,
    borderRadius: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 430,
  },
  text: {
    fontWeight: 'bold',
  },
  container: {
    width: 500,
    flex: 1,
  },
});
