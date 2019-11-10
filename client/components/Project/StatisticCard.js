import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export const StatisticCard = ({
  category,
  metric,
  unit,
  description
}) => (
  <Layout style={styles.statistic}>
    <Text style={styles.title} category="s1">
      {category}
    </Text>
    <Text category="h6">
      {metric} {unit}
    </Text>
    <Text category="c1">
      {description}
    </Text>
  </Layout>
);

StatisticCard.propTypes = {
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
