import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { ProjectCard } from '../components/ProjectCard';

export class ExploreCategories extends React.Component {

    renderCard = () => {
        <ProjectCard />
    }

  render() {
    return (
        <ScrollView bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
            <List contentContainerStyle={styles.listStyle} data={}
            renderItem={this.renderCard}/>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  listStyle: { paddingHorizontal: 16, paddingVertical: 8},
});
