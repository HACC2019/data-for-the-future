import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity,
    ImageBackground, Image, View,  } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';

import CustomIcon from '../components/CustomIcon'

export class CategoryButton extends React.Component {
  
  gotoCategoryProjects = ({ category }) => Actions.ExploreCategoryProjects({
    category
  })

  bg = this.props.categoryBg;;
  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={() => this.gotoCategoryProjects(
      {category: {
        title: `${this.props.categoryTitle}`,
        description: `${this.props.categoryDescription}`,
        icon: `${this.props.categoryIcon}`,
        bg: `${this.props.categoryBg}`,
        goal: `${this.props.categoryGoal}`,
      }})}>
        <ImageBackground style={styles.container}
        source={{uri: `${this.props.categoryBg}`}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Icon name={this.props.categoryIcon} width={50} height={50} fill='#FFFFFF' /></View>
         <View style={{flex: 3, justifyContent: 'center'}}>
          <Text style={styles.levelLabel} category='h6'> 
              {this.props.categoryTitle}
          </Text>
          </View>
        </View>
        </ImageBackground>
    </TouchableOpacity>
    );
  }
}

CategoryButton.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryIcon: PropTypes.string.isRequired,
    categoryDescription: PropTypes.string.isRequired,
    categoryBg: PropTypes.string,
    categoryGoal: PropTypes.string,
  };
  
  CategoryButton.defaultProps = {
    categoryTitle: 'CategoryTitle',
    categoryDescription: 'Default description',
    categoryIcon: 'person',
    categoryGoal: 'https://aloha-challenge.hawaiigreengrowth.org/aloha-goals/',
  };



  function elevationShadowStyle(elevation) {
    return {
      elevation,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation
    };
  }

const styles = StyleSheet.create({
container: {
    height: 90,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    marginVertical: 8,
    ...elevationShadowStyle(6)
  },
levelLabel: {
    color: 'white',
},
titleLabel: {
    color: 'white',
},


});
