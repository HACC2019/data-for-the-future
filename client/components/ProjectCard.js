import React from 'react';
import { StyleSheet, TouchableOpacity,
    ImageBackground, StyleSheet,
    View, ViewStyle } from 'react-native';
import { Text, Icon } from 'react-native-ui-kitten';


export class ProjectCard extends React.Component {
  
  gotoProjectPage = () => { };


  render() {
    return (
    <TouchableOpacity activeOpacity={0.95} onPress={this.gotoProjectPage}>
        <ImageBackground style={styles.container} source={{uri: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg'}}>
        <View style={styles.overlay}>
            <View>
                <Text style={styles.levelLabel} appearance='h5'> 
                    {this.props}
                </Text>
            </View>


            <View style={[styles.chipContainer, style]}>
                <Icon name='clock-outline' style={styles.chipIcon}/>
                <Text style={styles.chipsText} category='c2'>
                    Start Date    
                </Text>
                <Icon name='people-outline' style={styles.chipIcon}/>
                <Text style={styles.chipsText} category='c2'>
                    People
                </Text>
            </View>
        </View>
        </ImageBackground>
    </TouchableOpacity>
    );
  }
}

Project.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.number).isRequired,
    date: PropTypes.string.isRequired,
    participants: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    report: PropTypes.string,
    statistics: PropTypes.arrayOf(PropTypes.shape({
      category: PropTypes.string,
      metric: PropTypes.number,
      unit: PropTypes.string,
      description: PropTypes.string
    }))
  };
  
  Project.defaultProps = {
    report: '',
    statistics: []
  };

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
    backgroundColor: 'black',
    borderRadius: 100,
  },
chipIcon: {
    width: 13,
    height: 13,
    tintColor: 'white',
},
overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    ...StyleSheet.absoluteFillObject,
}
});
