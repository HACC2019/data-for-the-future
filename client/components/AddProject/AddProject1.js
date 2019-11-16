import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Layout, Select } from 'react-native-ui-kitten';

// Select Categories
export class AddProject1 extends React.Component {

  categories = [ {id: 1, text:'Clean Energy',
  description:'70% clean energy – 40% from renewable sources and 30% from efficiency, with a view towards 100% renewable energy by 2045',},
  {id: 2, text:'Local Food', 
  description:'At least double local food production: 0-30% of food consumed is grown locally',},
  {id: 3, text:'Natural Resource Management',
  description:'Reverse the trend of natural resource loss by increasing freshwater security, marine management, invasive species control and restoration',},
  {id: 4, text:'Waste Reduction',
  description:'Reduce solid waste stream prior to disposal by 70% through source reduction, recycling, bioconversion, and landfill diversion methods',},
  {id: 5, text:'Smart Sustainable Communities',
  description:'Increase livability and resilience through planning and implementation at the state and county levels',},
  {id: 6, text:'Green Workforce & Education',
  description:'Increase local green jobs and education to implement these targets',}];


  state = {
    categories: [],
  };

  onSelectCat = (categories) => {
    this.setState({ categories });
  };

  render() {
    return (
      <Layout>
        <Text category='h5'>Choose Categories</Text>
        <Select
          data={this.categories}
          multiSelect={true}
          selectedOption={this.state.categories}
          onSelect={this.onSelectCat}
          placeholder='Aloha+ Categories'/>
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});