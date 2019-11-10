import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';

const projects = () => Actions.Project({
  project: "Waikiki Biking",
  categories: [1,2,3],
  date: "Thu, Nov. 28 11:00 - 16:00",
  participants: 24,
  summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Biking is great for the mind, soul and body. Experience the breeze while also exercising your thighs.",
  report: "A high turn out this time. We reserved about twenty bikes but needed sixty! During the time, we toured what Waikiki had to offer with its scenic Layouts, impeccable food and deceiving tourist traps.",
  statistics: [
    {
      category: 'CLEAN ENERGY',
      metric: 50,
      unit: 'tons',
      description: 'of CO2 curbed'
    },
    {
      category: 'LOCAL FOOD',
      metric: 1000,
      unit: 'USD',
      description: 'into economy'
    }
  ]
})

export const HomeScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Data for the Future</Text>
    <Text category="p1">Accelerate Hawaii to a sustainable future.</Text>

    <Button
      style={styles.navigation}
      onPress={projects}
    >
      Get Involved
    </Button>
    <Button
      style={styles.navigation}
      onPress={Actions.ExploreCategories}
    >
     See Categories 
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16 },
  navigation: { margin: 15 }
});
