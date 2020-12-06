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
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import {Icon} from 'react-native-elements';
import Places from '../screens/ExtraComponent/Places';

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
                placeholder="Suggestions"
                placeholderTextColor="grey"
                style={styles.inputText}
              />
            </View>
            <View style={styles.textContainer}>
              <ScrollView>
                <View>
                  {/*Laver et view, hvor det muligt at trykke på komponenten "places",
                             yderligere tager komponenten "places" imod props: navn og rabat*/}
                  <View style={styles.ScrollStyle}>
                    <TouchableOpacity>
                      <Places
                        imageUri={require('../assets/asos.png')}
                        name="Asos"
                        price="20"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Places
                        imageUri={require('../assets/hiko.jpg')}
                        name="Hiko Sandwich"
                        price="15"
                      />
                    </TouchableOpacity>
                    <Places
                      imageUri={require('../assets/magasin.png')}
                      name="Magasin"
                      price="15"
                    />
                    <Places
                      imageUri={require('../assets/Humac.jpg')}
                      name="Humac"
                      price="10"
                    />
                    <Places
                      imageUri={require('../assets/apple.png')}
                      name="Apple"
                      price="10"
                    />
                    <Places
                      imageUri={require('../assets/Microsoft.jpg')}
                      name="Microsoft"
                      price="15"
                    />
                    <Places
                      imageUri={require('../assets/espresso.png')}
                      name="Espresso House"
                      price="15"
                    />
                    <Places
                      imageUri={require('../assets/Urban.jpg')}
                      name="Urban Outfitters"
                      price="20"
                    />
                    <Places
                      imageUri={require('../assets/Illum.png')}
                      name="Illum"
                      price="10%"
                    />
                    <Places
                      imageUri={require('../assets/dalle.jpeg')}
                      name="Dalle Valle"
                      price="10%"
                    />
                    <Places
                      imageUri={require('../assets/Uniqlo.png')}
                      name="Uniqlo"
                      price="15"
                    />
                    <Places
                      imageUri={require('../assets/hm.jpg')}
                      name="H&M"
                      price="15"
                    />
                    <Places
                      imageUri={require('../assets/Zara.png')}
                      name="Zara"
                      price="15%"
                    />
                    <Places
                      imageUri={require('../assets/justeat.jpeg')}
                      name="Just Eat"
                      price="15%"
                    />
                    <Places
                      imageUri={require('../assets/kfc.png')}
                      name="KFC"
                      price="20"
                    />
                    <Places
                      imageUri={require('../assets/burgerking.jpg')}
                      name="Burger King"
                      price="20"
                    />
                    <Places
                      imageUri={require('../assets/Sportmaster.jpg')}
                      name="Sport Master"
                      price="10"
                    />
                    <Places
                      imageUri={require('../assets/starbucks.png')}
                      name="Starbuks"
                      price="10"
                    />
                  </View>
                </View>
              </ScrollView>
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
    marginTop: 10,
    alignItems: 'center',
    height: 700,
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
  ScrollStyle: {
    paddingHorizontal: 20,
    marginTop: 0.1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
