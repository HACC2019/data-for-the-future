import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Button, Layout, Text, Icon } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import { Card } from '../components/Card';

const categories = [
  {
    name: 'Clean Energy',
    icon: 'charging-outline',
    description: 'Sustainability is the name of the game.'
  },
  {
    name: 'Local Food',
    icon: 'car-outline',
    description: 'Sustainability is the name of the game.'
  },
  {
    name: 'Resources',
    icon: 'globe-2-outline',
    description: 'Sustainability is the name of the game.'
  },
  {
    name: 'Waste',
    icon: 'trash-outline',
    description: 'Sustainability is the name of the game.'
  },
  {
    name: 'Communities',
    icon: 'bulb-outline',
    description: 'Sustainability is the name of the game.'
  },
  {
    name: 'Education',
    icon: 'people-outline',
    description: 'Sustainability is the name of the game.'
  }
]

const goToCategory = ({ category }) => Actions.ExploreProjects({
  category
})

export const ExploreCategories = () => {
  const retrieveCategories = () => {

  }

  return (
    <Layout style={styles.container}>
      <Text style={{ paddingTop: 15 }} category='h4'>Categories</Text>
      <Text style={{ paddingBottom: 10 }} category="p1" appearance="hint">
        Select a category to get involved.
      </Text>
      <Layout style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          categories.map(category => (
            <Card
              key={category.name}
              name={category.name}
              description={category.description}
              icon={category.icon}
              category={category}
            />
          ))
        }
      </Layout>
    </Layout>
  )
};

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
  container: { flex: 1, alignItems: 'center' },
  text: { marginVertical: 16 },
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
