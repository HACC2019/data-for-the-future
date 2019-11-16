import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity,
    ImageBackground, View } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';


export class ProjectCard extends React.Component {
  

  seeProject = () => Actions.ProjectPage({
    projectName: this.props.projectName,
    categories: this.props.categories,
    date: this.props.date,
    people: this.props.people,
    summary: this.props.summary,
    report: this.props.report,
    stats: this.props.stats,
    lat: this.props.lat,
    long: this.props.long,
    image: this.props.image,
    host: this.props.host
  })

  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={this.seeProject}>
        <ImageBackground style={styles.container} source={{uri: `${this.props.image}`}}>
        <View style={styles.overlay}>
            <View  style={styles.chipContainer}>
                <Text style={styles.levelLabel} category='h5'> 
                    {this.props.projectName}
                </Text>
            </View>

            <View style={styles.chipContainer}>
                <Icon name='clock-outline' width={25} height={25} fill='#FFFFFF'/>
                <Text style={styles.chipsText} category='label'>
                {this.props.date}  
                </Text>
                <Icon name='people-outline'width={25} height={25} fill='#FFFFFF'/>
                <Text style={styles.chipsText} category='label'>
                {this.props.people}
                </Text>
            </View>
        </View>
        </ImageBackground>
    </TouchableOpacity>
    );
  }
}

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    date: PropTypes.string.isRequired,
    people: PropTypes.array,
    summary: PropTypes.string.isRequired,
    report: PropTypes.string,
    stats: PropTypes.array,
    lat: PropTypes.number,
    long: PropTypes.number,
    image: PropTypes.string,
    host: PropTypes.number,
    id: PropTypes.number,
  };
  
ProjectCard.defaultProps = {
    people: 0,
    date: 'Nov 11',
    projectName: 'Waikiki Biking',
    report: '',
    image: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg'
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
