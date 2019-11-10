import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';

export const ExploreCategory = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Categories</Text>
    <Button onPress={Actions.Project}>BUTTON</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16 },
});
