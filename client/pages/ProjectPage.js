import React from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, ScrollView, Image, Dimensions  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { CategoryButton } from '../components/CategoryButton';
import { Actions } from 'react-native-router-flux';

export class ProjectPage extends React.Component {


  render() {
    return (
      <ScrollView style={styles.container} bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
          <Image resizeMode={'contain'}style={styles.image} source={{uri: 'https://i.ibb.co/T8pZ4WQ/Project-Page.png'}}></Image>
        </ScrollView>
    );
  }
}

const win = Dimensions.get('window');


const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: win.width,
    height: win.height,
  },
  container: {
    flex: 1,
  }
});
