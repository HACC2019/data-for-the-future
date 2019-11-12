import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';


export const TestScreen = () => (
  <Layout style={styles.container}>
    <Button style={styles.navigation} onPress={Actions.ExploreCategories}>
     ExploreCategories
    </Button>
    <Button style={styles.navigation} onPress={Actions.ExploreCategoryProjects}>
    ExploreCategoryProjects
    </Button>
    <Button style={styles.navigation} onPress={Actions.AddProject}>
     AddProject
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  navigation: { margin: 15 }
});
