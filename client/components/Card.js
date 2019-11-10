import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';

export const Card = ({
  name,
  description,
  icon
}) => (
  <View style={[styles.shadow, styles.box]}>
    <Icon name={icon} width={50} height={50} fill='#FF6961' />
    <Text category="h6">
      {name}
    </Text>
    <Text appearance="hint">
      {description}
    </Text>
  </View>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

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
  shadow: {
    // Sweet! Android shadow!
    ...elevationShadowStyle(5)
  },
  box: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    width: '45%'
  }
});
