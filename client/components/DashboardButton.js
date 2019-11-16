import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, ImageBackground, View,  } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';


export class DashboardButton extends React.Component {
  
  gotoDashboardCategory = ({ category }) => Actions.DashboardCat({
    category
  })

  bg = this.props.categoryBg;;
  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={() => this.gotoDashboardCategory(
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
          <Icon name={this.props.categoryIcon} width={100} height={100} fill='#FFFFFF' /></View>
         {/* <View style={{flex: 3, justifyContent: 'center'}}>
          <Text style={styles.levelLabel} category='h6'> 
              {this.props.categoryTitle}
          </Text>
          </View> */}
        </ImageBackground>
    </TouchableOpacity>
    );
  }
}

DashboardButton.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryIcon: PropTypes.string.isRequired,
    categoryDescription: PropTypes.string.isRequired,
    categoryBg: PropTypes.string,
    categoryGoal: PropTypes.string,
  };
  
  DashboardButton.defaultProps = {
    categoryTitle: 'CategoryTitle',
    categoryDescription: 'Default description',
    categoryIcon: 'person',
    categoryGoal: 'https://aloha-challenge.hawaiigreengrowth.org/aloha-goals/',
  };




const styles = StyleSheet.create({
container: {
    height: 120,
    padding: 10,
    margin: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center',
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
