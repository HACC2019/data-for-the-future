import React from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, View  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { DashboardButton } from '../components/DashboardButton';
import CustomIcon from '../components/CustomIcon'

export class Dashboard extends React.Component {


  categories = [ {title:'Clean Energy', icon: 'icon-energy',
  description:'70% clean energy – 40% from renewable sources and 30% from efficiency, with a view towards 100% renewable energy by 2045',
  image:'https://i.ibb.co/d5n1kHt/energyBg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/clean-energy/'},
  {title:'Local Food', icon: 'icon-food',
  description:'At least double local food production: 0-30% of food consumed is grown locally',
  image:'https://i.ibb.co/Y7tqmX2/foodBg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/local-food/'},
  {title:'Natural Resource Management', icon: 'icon-nrm',
  description:'Reverse the trend of natural resource loss by increasing freshwater security, watershed production, marine management, invasive species control and restoration',
  image:'https://i.ibb.co/Dggk6qH/nrmBg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/natural-resource-management/'},
  {title:'Waste Reduction', icon: 'icon-waste',
  description:'Reduce solid waste stream prior to disposal by 70% through source reduction, recycling, bioconversion, and landfill diversion methods',
  image:'https://i.ibb.co/W3pzPPK/wasteRb.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/waste-reduction/'},
  {title:'Smart Sustainable Communities', icon: 'icon-communities',
  description:'Increase livability and resilience through planning and implementation at the state and county levels',
  image:'https://i.ibb.co/9T9ssKJ/communities-Bg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/smart-sustainable-communities/'},
  {title:'Green Workforce & Education', icon: 'icon-eduwork',
  description:'Increase local green jobs and education to implement these targets',
  image:'https://i.ibb.co/Fzxfst4/eduBg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/green-workforce-education/'}]
  

   renderCard = ({item}) => (
        <DashboardButton categoryTitle={`${item.title}`} categoryDescription={`${item.description}`}
        categoryIcon={`${item.icon}`} categoryBg={`${item.image}`} categoryGoal={`${item.goal}`}/>
   )

  render() {
    return (
        <View style={styles.container}>
            <List contentContainerStyle={styles.listStyle}
            data={this.categories}
            renderItem={this.renderCard}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
  listStyle: { paddingHorizontal: 16, paddingVertical: 8,},
});