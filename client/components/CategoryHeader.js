import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity,
    ImageBackground, View, Linking } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';
import CustomIcon from '../components/CustomIcon'



export class CategoryHeader extends React.Component {
  
  gotoCategoryGoal = () => {Linking.openURL(`${this.props.categoryGoal}`)};


  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={this.gotoCategoryGoal}>
        <ImageBackground style={styles.container} source={{uri: `${this.props.categoryBg}`}}>
            <View style={{flex:1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex:1, flexDirection:'row', padding: 5, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex:1}}>
              <CustomIcon name={this.props.categoryIcon} size={40} color='#FFFFFF'/>
              </View>
              <View style={{flex:5 }}>
                <Text style={styles.levelLabel} category='h6'> 
                    {this.props.categoryTitle}
                </Text>
                </View>
            </View>
            <View style={{flex: 2, margin: 5}}>
                <Text style={styles.levelLabel} category='p1'> 
                    {this.props.categoryDescription}
                </Text>
            </View>
            </View>
        </ImageBackground>
    </TouchableOpacity>
    );
  }
}

CategoryHeader.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryDescription: PropTypes.string.isRequired,
    categoryIcon: PropTypes.string.isRequired,
    categoryBg: PropTypes.string,
    categoryGoal: PropTypes.string,
  };
  
  CategoryHeader.defaultProps = {
    categoryTitle: 'CategoryTitle',
    categoryDescription: 'Default description',
    categoryIcon: 'person',
    categoryGoal: 'https://aloha-challenge.hawaiigreengrowth.org/aloha-goals/',
  };

const styles = StyleSheet.create({
container: {
    height: 125,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
levelLabel: {
    color: 'white',
},
titleLabel: {
    color: 'white',
},
icon: {
    color: 'white'
},

});
