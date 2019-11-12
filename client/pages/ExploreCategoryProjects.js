import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ScrollViewProps, StyleSheet, View  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { ProjectCard } from '../components/ProjectCard';
import { CategoryHeader } from '../components/CategoryHeader';
import { Actions } from 'react-native-router-flux';

export class ExploreCategoryProjects extends React.Component {

    listdata = [
        {title: 'Test1', date:'Nov 12', participants: 5, image: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg'},
        {title: 'Test2', date:'Nov 13', participants: 10, image: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg' },
        {title: 'Test3', date:'Nov 14', participants: 15,  image: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg'},
    ]

    renderCard = (item, index) => {
        <ProjectCard projectTitle={`${item.title}`} projectDate={`${item.date}`}
        projectParticipants={`${item.participants}`} projectDate={`${item.image}`}/>
    }

  render() {
    return (
      <View style={styles.container}>
      <CategoryHeader categoryTitle={category.title} categoryDescription={category.description} categoryIcon={category.icon} categoryBg={category.bg} categoryGoal={category.goal}></CategoryHeader>
        <ScrollView bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
            <List contentContainerStyle={styles.listStyle} data={listdata}
            renderItem={this.renderCard}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle: { paddingHorizontal: 16, paddingVertical: 8},
});
