import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export const HomeScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
    <Button>BUTTON</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16 },
});
