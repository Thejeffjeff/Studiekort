import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Header from './Header';

export default class About extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header
          navigation={this.props.navigation}
          title="About us"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{color: 'white'}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}> About Digital Student Card </Text>
          <Text style={styles.alotoftext}>
            Welcome to Your Digital Student Card. I was tired of always having
            to keep my student card on me, everytime I went on campus. Therefore
            I made this app, because I always have my own phone. I thought many
            student had the same feeling as me. By making Student Card digital,
            you also eliminate the factor of loosing it. The student card will
            be linked to your school account, which means you can log in
            everywhere on every device to show your student card.
          </Text>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={styles.image}
              source={require('../assets/logo.png')}
            />
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
    flex: 1,
    marginTop: 200,
    alignItems: 'center',
    height: 100,
  },
  alotoftext: {
    justifyContent: 'center',
    padding: 2,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
