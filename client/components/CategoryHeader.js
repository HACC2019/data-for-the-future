import React from 'react';
import { StyleSheet, TouchableOpacity,
    ImageBackground, StyleSheet, View, Linking } from 'react-native';
import { Text } from 'react-native-ui-kitten';

import CustomIcon from './components/CustomIcon'


export class CategoryHeader extends React.Component {
  
  gotoCategoryGoal = () => {Linking.openURL(`${this.props.categoryGoal}`)};


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
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: row,
    marginVertical: 8,
    flex: 1
  },
levelLabel: {
    color: 'white',
},
titleLabel: {
    color: 'white',
},
icon: {
    size: 50,
    color: 'white'
},

});
