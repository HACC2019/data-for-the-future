import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export class IndicatorStats extends React.Component {


  render() {
    return (
      <View style={styles.statistic}>
      <Text style={styles.title} category="s1">
        {this.props.category}
      </Text>
      <Text category="h6">
        {this.props.metric} {this.props.unit}
      </Text>
      <Text category="c1">
        {this.props.description}
      </Text>
    </View>
    );
  }
}


IndicatorStats.propTypes = {
  category: PropTypes.string.isRequired,
  metric: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  statistic: {
    paddingHorizontal: 6,
    display: 'flex',
    alignContent: 'center'
  }
});