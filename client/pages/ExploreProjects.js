import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';

import { DoubleCard } from '../components/DoubleCard';

const route = (category) => Actions.ExploreProjects({ category });

export const ExploreProjects = ({
  category
}) => {
  const retrieveProjects = () => {

  }

  return (
    <Layout style={styles.container}>
      <DoubleCard
        name="Waikiki Biking"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Nov. 28"
      />
    </Layout>
  );
}

ExploreProjects.propTypes = {
  category: PropTypes.object
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 10 },
  text: { marginVertical: 16 },
});
