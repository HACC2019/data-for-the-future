import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';

const route = (category) => Actions.ExploreProjects({ category });

export const ExploreProjects = ({
  category
}) => {
  const retrieveProjects = () => {

  }

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category='h4'>{category.name}</Text>
    </Layout>
  );
}

ExploreProjects.propTypes = {
  category: PropTypes.object
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16 },
});
