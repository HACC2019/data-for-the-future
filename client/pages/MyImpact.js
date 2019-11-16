import React from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, ScrollView, Image, Dimensions  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { CategoryButton } from '../components/CategoryButton';
import { Actions } from 'react-native-router-flux';

export class MyImpact extends React.Component {


  totalprojects = 0;
  cat1 = 0;
  cat2 = 0;
  cat3 = 0;
  cat4 = 0;
  cat5 = 0;
  cat6 = 0;

  
  //filter all projects where people ==userid, host == userid
  // PIE GRAPH 
  //filter projects where categories includes catid
  // length of that = cat1 
  // add to totalprojects

  //LINE GRAPH month history 3 months
  // get project endsAt
  // new Date from string
  // check if  date.getMonth()  == 10, 11, 12, 1
  // plot oct, nov, dec, jan

  render() {
    return (
      <ScrollView style={styles.container} bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
          <Image resizeMode={'contain'}style={styles.image} source={{uri: 'https://i.ibb.co/F8FpSks/My-Impact.png'}}></Image>
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
