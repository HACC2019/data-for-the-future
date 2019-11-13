import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';


export const TestScreen = () => (
  <Layout style={styles.container}>

  <Text category='h1'>Demo Screens</Text>
    <Button style={styles.navigation} onPress={Actions.ExploreCategories}>
     Explore Categories
    </Button>

    <Button style={styles.navigation} onPress={Actions.AddProject}>
     Add Project
    </Button>
    <Button style={styles.navigation} onPress={Actions.DashboardCategory}>
     Dashboard Category Summary
    </Button>
    <Button style={styles.navigation} onPress={Actions.MyImpact}>
     Personal Impact
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  navigation: { margin: 15 }
});
