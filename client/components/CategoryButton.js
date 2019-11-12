import React from 'react';
import { StyleSheet, TouchableOpacity,
    ImageBackground, StyleSheet, View,  } from 'react-native';
import { Text } from 'react-native-ui-kitten';

import CustomIcon from './components/CustomIcon'


export class CategoryButton extends React.Component {
  
  gotoCategoryProjects = ({ category }) => Actions.ExploreCategoryProjects({
    category: {
        title: `${this.props.categoryTitle}`,
        description: `${this.props.categoryDescription}`,
        icon: `${this.props.categoryIcon}`,
        bg: `${this.props.categoryBg}`,
        goal: `${this.props.categoryGoal}`,
    }
  })

  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={this.gotoCategoryProjects}>
        <ImageBackground style={styles.container} source={{uri: `${this.props.categoryBg}`}}>
        <View style={styles.overlay}>
            <View>
                <CustomIcon name={this.props.categoryIcon} style={styles.icon} />
                <Text style={styles.levelLabel} appearance='h5'> 
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
    height: 200,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    flexDirection: row,
    marginVertical: 8,
    width: '90%',
    ...elevationShadowStyle(5)
  },
levelLabel: {
    color: 'white',
},
titleLabel: {
    color: 'white',
},
icon: {
    size: 50,
    color: 'white',
},

});
