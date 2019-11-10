import React from 'react';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';

const route = (category) => Actions.ExploreProjects({ category });

export const ExploreProjects = () => {
  const retrieveCategories = () => {

  }

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category='h4'>Categories</Text>
      <Button onPress={route}>Energy</Button>
      <Button onPress={route}>Food</Button>
      <Button onPress={route}>NRM</Button>
      <Button onPress={route}>Waste</Button>
      <Button onPress={route}>Communities</Button>
      <Button onPress={route}>Education/Workforce</Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16 },
});
