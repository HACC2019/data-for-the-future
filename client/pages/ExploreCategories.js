import React from 'react';
import {  StyleSheet, View  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { CategoryButton } from '../components/CategoryButton';
import { Actions } from 'react-native-router-flux';

export class ExploreCategories extends React.Component {

    categories = [ {title:'Clean Energy', icon: 'energy',
    description:'70% clean energy – 40% from renewable sources and 30% from efficiency, with a view towards 100% renewable energy by 2045',
    image:'./assets/energyBg.png', 
    goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/clean-energy/'},
    {title:'Local Food', icon: 'food',
    description:'At least double local food production: 0-30% of food consumed is grown locally',
    image:'./assets/foodBg.png', 
    goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/local-food/'},
    {title:'Natural Resource Management', icon: 'nrm',
    description:'Reverse the trend of natural resource loss by increasing freshwater security, watershed production, marine management, invasive species control and restoration',
    image:'./assets/nrmBg.png', 
    goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/natural-resource-management/'},
    {title:'Waste Reduction', icon: 'waste',
    description:'Reduce solid waste stream prior to disposal by 70% through source reduction, recycling, bioconversion, and landfill diversion methods',
    image:'./assets/wasteBg.png', 
    goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/waste-reduction/'},
    {title:'Smart Sustainable Communities', icon: 'communities',
    description:'Increase livability and resilience through planning and implementation at the state and county levels',
    image:'./assets/communitiesBg.png', 
    goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/smart-sustainable-communities/'},
    {title:'Green Workforce & Education', icon: 'eduwork',
    description:'Increase local green jobs and education to implement these targets',
    image:'./assets/eduBg.png', 
    goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/green-workforce-education/'}]


    renderCard = (item, index) => {
        <CategoryButton categoryTitle={`${item.title}`} categoryDescription={`${item.description}`}
        categoryIcon={`${item.icon}`} categoryBg={`${item.image}`} categoryGoal={`${item.goal}`}/>
    }

  render() {
    return (
        <View style={styles.container}>
            <List contentContainerStyle={styles.listStyle} data={categories}
            renderItem={this.renderCard}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
  listStyle: { paddingHorizontal: 16, paddingVertical: 8,},
});
