'use strict';
import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';

export default class CameraComponent extends PureComponent {
  handleNavigation = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.icon} onPress={this.handleNavigation}>
            <Icon
              iconStyle={{marginLeft: 10, marginTop: 10, color: 'white'}}
              size={30}
              name="menu"
            />
          </TouchableOpacity>
          <Text style={styles.txt}>Camera</Text>
        </View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          captureAudio={false}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#276b80',
  },
  txt: {
    width: '85%',
    textAlign: 'center',
    paddingRight: 66,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 17,
  },
});
