import React from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, View, ImageBackground } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { DashboardButton } from '../components/DashboardButton';

export class Dashboard extends React.Component {


  categories = [ {id: 1, name:'Clean Energy', icon: 'charging-outline',
  description:'70% clean energy – 40% from renewable sources and 30% from efficiency, with a view towards 100% renewable energy by 2045',
  image:'https://i.ibb.co/d5n1kHt/energyBg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/clean-energy/'},
  {id: 2, name:'Local Food', icon: 'car-outline',
  description:'At least double local food production: 0-30% of food consumed is grown locally',
  image:'https://i.ibb.co/Y7tqmX2/foodBg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/local-food/'},
  {id: 3, name:'Natural Resource Management', icon: 'globe-2-outline',
  description:'Reverse the trend of natural resource loss by increasing freshwater security, marine management, invasive species control and restoration',
  image:'https://i.ibb.co/Dggk6qH/nrmBg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/natural-resource-management/'},
  {id: 4, name:'Waste Reduction', icon: 'trash-outline',
  description:'Reduce solid waste stream prior to disposal by 70% through source reduction, recycling, bioconversion, and landfill diversion methods',
  image:'https://i.ibb.co/W3pzPPK/wasteRb.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/waste-reduction/'},
  {id: 5, name:'Smart Sustainable Communities', icon: 'bulb-outline',
  description:'Increase livability and resilience through planning and implementation at the state and county levels',
  image:'https://i.ibb.co/9T9ssKJ/communities-Bg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/smart-sustainable-communities/'},
  {id: 6, name:'Green Workforce & Education', icon: 'people-outline',
  description:'Increase local green jobs and education to implement these targets',
  image:'https://i.ibb.co/Fzxfst4/eduBg.png', 
  goal: 'http://aloha-challenge.hawaiigreengrowth.org/aloha-goals/green-workforce-education/'}]
  

  render() {
    return (
        <View style={styles.container}>

<ImageBackground style={{flex:1,  justifyContent: 'center',alignItems:'center',alignContent:'center'}}
source={{uri: 'https://images.cruisecritic.com/image/18970/hawaii-cruise-tips_600x400_21.jpg'}}>
        <View style={{flex:1, padding: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color:'white'}} category='h3'> 
                 Aloha+ Challenge
            </Text>
            <Text style={{color:'white'}} category='s1'>Measuring Hawai‘i’s Sustainability</Text>
           </View>
            </ImageBackground>

          <View style={styles.listStyle}>
          {this.categories.map((item) => (
            <DashboardButton
              categoryId={item.id}
              categoryTitle={item.name}
              categoryDescription={item.description}
              categoryIcon={item.icon}
              categoryBg={item.image}
              categoryGoal={item.goal}
              key={item.id}
            />
          ))}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
  listStyle: { flex:3, padding:15, flexWrap:'wrap', flexDirection:'row',
  justifyContent: 'center',alignItems:'center',alignContent:'center'},
});