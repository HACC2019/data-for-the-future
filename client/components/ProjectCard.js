import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity,
    ImageBackground, View } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';


export class ProjectCard extends React.Component {
  

  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={Actions.ProjectPage}>
        <ImageBackground style={styles.container} source={{uri: `${this.props.projectImage}`}}>
        <View style={styles.overlay}>
            <View>
                <Text style={styles.levelLabel} category='h5'> 
                    {this.props.projectTitle}
                </Text>
            </View>

            <View style={styles.chipContainer}>
                <Icon name='clock-outline' width={20} height={20} fill='#FFFFFF'/>
                <Text style={styles.chipsText} category='label'>
                {this.props.projectDate}  
                </Text>
                <Icon name='people-outline'width={20} height={20} fill='#FFFFFF'/>
                <Text style={styles.chipsText} category='label'>
                {this.props.projectParticipants}
                </Text>
            </View>
        </View>
        </ImageBackground>
    </TouchableOpacity>
    );
  }
}

ProjectCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    projectDate: PropTypes.string.isRequired,
    projectParticipants: PropTypes.number.isRequired,
    projectImage: PropTypes.string,
  };
  
ProjectCard.defaultProps = {
    participants: 0,
    projectDate: 'Nov 11',
    projectTitle: 'Project Title',
    projectImage: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg'
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
    flexDirection: 'row',
    marginVertical: 8,
    ...elevationShadowStyle(5)
  },
levelLabel: {
    color: 'white',
},
titleLabel: {
    color: 'white',
},
chips: {
    width: 50,
},
chipsText: {
    color: 'white',
},
chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
  },
overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    ...StyleSheet.absoluteFillObject,
}
});
