import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {TouchableOpacity, StyleSheet, SafeAreaView, Text} from 'react-native';

export default class Header extends Component {
  handleNavigation = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    const {title} = this.props;
    return (
      <SafeAreaView style={styles.container}>
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
