import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity,
    ImageBackground, Image, View,  } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';


export class CategoryButton extends React.Component {
  
  gotoCategoryProjects = ({ category }) => Actions.ExploreCategoryProjects({category
  });

  
  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={() => this.gotoCategoryProjects(
      {category: {
        id: this.props.categoryId,
        title: this.props.categoryTitle,
        description: this.props.categoryDescription,
        icon: this.props.categoryIcon,
        bg: this.props.categoryBg,
        goal: this.props.categoryGoal,
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
    categoryId: PropTypes.number.isRequired,
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



const styles = StyleSheet.create({
container: {
    height: 90,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    marginVertical: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },

  },
levelLabel: {
    color: 'white',
},
titleLabel: {
    color: 'white',
},


});
