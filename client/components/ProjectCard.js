import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity,
    ImageBackground, View } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';


export class ProjectCard extends React.Component {
  

  seeProject = () => Actions.ProjectPage({
    project: "Waikiki Biking",
    categories: [1,2,3],
    date: "Thu, Nov. 28 11:00 - 16:00",
    participants: 24,
    summary: "Join us for a day of biking along the beach and reduce the amount of CO2 in the atmosphere by choosing an alternative mode of transportation. You also benefit from increased health and cardiovascular activity. There will be 40 bikes available! Meet us at the Statue!",
    report: "A high turn out this time. We reserved about twenty bikes but needed sixty! During the time, we toured what Waikiki had to offer with its scenic Layouts, impeccable food and deceiving tourist traps.",
    statistics: [
      {
        category: 'CLEAN ENERGY',
        metric: 50,
        unit: 'tons',
        description: 'of CO2 offset'
      },
      {
        category: 'LOCAL FOOD',
        metric: 1000,
        unit: 'USD',
        description: 'into economy'
      }
    ]
  })

  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={this.seeProject}>
        <ImageBackground style={styles.container} source={{uri: `${this.props.projectImage}`}}>
        <View style={styles.overlay}>
            <View  style={styles.chipContainer}>
                <Text style={styles.levelLabel} category='h5'> 
                    {this.props.projectTitle}
                </Text>
            </View>

            <View style={styles.chipContainer}>
                <Icon name='clock-outline' width={25} height={25} fill='#FFFFFF'/>
                <Text style={styles.chipsText} category='label'>
                {this.props.projectDate}  
                </Text>
                <Icon name='people-outline'width={25} height={25} fill='#FFFFFF'/>
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
    project: PropTypes.object,
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
    height: 175,
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
    padding: 10,
    margin: 10,
},
chipsText: {
    color: 'white',
    margin: 10,
},
chipContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop:4,
    borderRadius: 100,
  },
overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems:'flex-start',

}

});
