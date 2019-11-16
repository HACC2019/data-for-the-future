import React from 'react';
import { ScrollView, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button, Layout, Text, Input, Select, RangeDatepicker } from 'react-native-ui-kitten';
import MapPicker from "react-native-map-picker";

import Axios from 'axios';
import { AddProject2 } from '../components/AddProject/AddProject2';


//TODO
// - upload picture


export class AddProject extends React.Component {


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


  indicators = [
    { id: 1,
      categoryId: 1,
      name: "Hawaii Renewable Portfolio Standards by Utility/County",
      unit: 'RPS',
      description: 'by Utility/County',

    },
    {id: 2,
      categoryId: 1,
      name: "Hawai‘i Renewable Energy Generation by Utility/County",
      unit: 'kW Hours',
      description: 'by Utility/County',

    },
    {id: 3,
      categoryId: 1,
      name: "Hawaii Renewable Energy Generation by Source",
      unit: 'kW Hours',
      description: 'by Source',

    },
    {id: 4,
      categoryId: 1,
      name: 'Energy Efficiency Portfolio Savings',
      unit: 'dollars',
      description: 'saved from efficient sources',

    },
    {id: 5,
      categoryId: 1,
      name: 'ENERGY STAR Buildings',
      unit: 'latitude/longitude',
      description: "of buildings",

    },
    {
      categoryId: 1,
      name: 'Dollars spent on petroleum',
      unit: '$',
      description: 'per person total',

    },
    {id: 6,
      categoryId: 1,
      name: 'Average Energy use (household)',
      unit: 'kW Hours',
      description: 'per household',

    },
    {id: 7,
      categoryId: 1,
      name: 'Average Energy use by County',
      unit: 'kW Hours',
      description: 'per household by County',

    },
    {id: 8,
      categoryId: 1,
      name: 'Emissions inventory for Energy Sector',
      unit: 'tons',
      description: 'of greenhouse gasses emitted',

    },
    {id: 9,
      categoryId: 1,
      name: 'energy emissions by source',
      unit: 'tons',
      description: 'of greenhouse gasses emitted',

    },
    {id: 10,
      categoryId: 1,
      name: 'stationary combustion emissions by economic sector',
      unit: 'tons',
      description: 'of greenhouse gasses emitted',

    },
    {id: 11,
      categoryId: 1,
      name: 'transportation emissions by End-Use Sector',
      unit: 'tons',
      description: 'of greenhouse gasses emitted',

    },
    {id: 12,
      categoryId: 1,
      name: 'Power Plant emissions',
      unit: 'tons',
      description: 'of greenhouse gasses emitted',

    },
    {id: 13,
      categoryId: 1,
      name: 'Total petroleum use by sector',
      unit: 'Barrels (thousand)',
      description: 'of petroleum used',

    },
    {id: 14,
      categoryId: 1,
      name: 'Average Fuel Use Per Person/Annually',
      unit: '$',
      description: 'spent on petroleum per person per year',

    },
    {id: 15,
      categoryId: 1,
      name: 'Transportation',
      unit: 'Gallons',
      description: 'of fuel used for electric, ground, and air transportation',

    },
    {id: 16,
      categoryId: 2,
      name: 'Local Foods Production',
      unit: 'Pounds',
      description: 'of local food produced annually',

    },
    {id: 17,
      categoryId: 2,
      name: 'Local Foods Production',
      unit: 'Pounds',
      description: 'of red meat produced locally',

    },
    {id: 18,
      categoryId: 2,
      name: 'Local Foods Production',
      unit: 'Pounds',
      description: 'of cabbage produced locally',

    },
    {id: 19,
      categoryId: 2,
      name: 'Local Foods Production',
      unit: 'Pounds',
      description: 'of lettuce produced locally',

    },
    {id: 20,
      categoryId: 2,
      name: 'Local Foods Production',
      unit: 'Pounds',
      description: 'of eggplant produced locally',

    },
    {id: 21,
      categoryId: 2,
      name: 'Local Foods Production',
      unit: 'Pounds',
      description: 'of bananas produced locally',

    },
    {id: 22,
      categoryId: 2,
      name: 'Labor & Land resources',
      unit: 'Acres',
      description: 'of farm land in use',

    },
    {id: 23,
      categoryId: 2,
      name: 'Processing',
      unit: '#',
      description: "of agricultural processing facilities on Hawaii",

    },
    {id: 24,
      categoryId: 2,
      name: 'Distribution',
      unit: '#',
      description: 'of Farmers Markets statewide',

    },
    {id: 25,
      categoryId: 2,
      name: 'Consumption',
      unit: '$',
      description: 'of crop/livestock/aquaculture sales in Hawaii',

    },
    {id: 26,
      categoryId: 3,
      name: 'Increase Freshwater Capacity',
      unit: 'Million Gallons',
      description: 'of water used by county per year',

    },
    {id: 27,
      categoryId: 3,
      name: "Watershed Forest Protection",
      unit: 'Acres',
      description: "of land cover of burned areas in Hawaii",

    },
    {id: 28,
      categoryId: 3,
      name: "Marine Managed Areas",
      unit: 'Acres',
      description: "of land cover of burned areas in Hawaii",

    },
    {id: 29,
      categoryId: 3,
      name: 'Invasive Species Control',
      unit: '%',
      description: 'action items in implemtatation process',

    },
    {id: 30,
      categoryId: 3,
      name: 'Native Species Managed',
      unit: '%',
      description: 'of native species listed as threatened or endangered',

    },
    {id: 31,
      categoryId: 4,
      name: 'Total solid waste reduction',
      unit: 'tons',
      description: 'of solid waste reduced with H-power',

    },
    {id: 32,
      categoryId: 4,
      name: 'Recycling (type)',
      unit: 'Tons',
      description: 'of recycled/composted material by county',

    },
    {id: 33,
      categoryId: 4,
      name: 'Estimated Tons of materials diverted',
      unit: 'Tons',
      description: 'of material that is reused',

    },
    {id: 34,
      categoryId: 5,
      name: 'Mobility & Accessibility',
      unit: 'VMT (Vehicle Miles Travelled)',
      description: 'in Hawaii',

    },
    {id: 35,
      categoryId: 5,
      name: 'Economic Prosperity',
      unit: '%',
      description: 'of households below the self-sufficiency standard',

    },
    {id: 36,
      categoryId: 5,
      name: 'Overall Social Vulnerability Index by County',
      unit: 'SVI (Social Vulnerability Index)',
      description: 'by County',

    },
    {id: 37,
      categoryId: 5,
      name: 'Land Use Impacts',
      unit: 'people',
      description: 'per Acre of Urban Land',

    },
    {id: 38,
      categoryId: 5,
      name: 'Open Public Green Spaces',
      unit: 'square feet',
      description: 'of State Park',

    },
    {id: 39,
      categoryId: 5,
      name: 'Greenhouse Gas Mitigation',
      unit: 'tons',
      description: 'reduction in GHG emissions',

    },
    {id: 40,
    categoryId: 6,
    name: 'Aina-Based Education & Community Engagement',
    unit: 'Number',
    description: ' of public schools participating in initiative',

    },     
    { id: 41,
    categoryId: 6,
    name: 'Transformational Learning & Education Attainment',
    unit: 'children',
    description: 'ready to succeed in school',
    },
    { id: 42,
      categoryId: 5,
      name: 'Increase Livability',
      unit: 'hours',
      description: 'of cardiovascular activity',
      },
  ]


  cat1Ind = this.indicators.filter((item) => (item.id == 1)).map((item) => ({'text':item.category, 'id':item.id}))
  cat2Ind = this.indicators.filter((item) => (item.id == 2)).map((item) => ({'text':item.category, 'id':item.id}))
  cat3Ind = this.indicators.filter((item) => (item.id == 3)).map((item) => ({'text':item.category, 'id':item.id}))
  cat4Ind = this.indicators.filter((item) => (item.id == 4)).map((item) => ({'text':item.category, 'id':item.id}))
  cat5Ind = this.indicators.filter((item) => (item.id == 5)).map((item) => ({'text':item.category, 'id':item.id}))
  cat6Ind = this.indicators.filter((item) => (item.id == 6)).map((item) => ({'text':item.category, 'id':item.id}))

  state = {
    categories: [],
    cat1:[], cat2:[],
    cat3:[], cat4:[],
    cat5:[], cat6:[],
    title: '',
    description: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
    range: {
      startDate: null,
      endDate: null,
    },
    hostid: 10,
    image: 'https://tr.rbxcdn.com/7e932cce805debff45b060e5dfdf89bd/420/420/Decal/Png',
    submit: false
  };

  onSelectCat = (categories) => {this.setState({ categories });};
  
  onSelect1 = (cat1) => {this.setState({ cat1 });};
  onSelect2 = (cat2) => {this.setState({ cat2 });};
  onSelect3 = (cat3) => {this.setState({ cat3 });};
  onSelect4 = (cat4) => {this.setState({ cat4 });};
  onSelect5 = (cat5) => {this.setState({ cat5 });};
  onSelect6 = (cat6) => {this.setState({ cat6 });};

  onTitleChange = (title) => {this.setState({ title });};
  onDescriptionChange = (description) => {this.setState({ description });};

  onSelectDays = (range) => {this.setState({ range });};

  onCoordsChange = ({latitude,longitude}) => {this.setState({location: {latitude:latitude, longitude:longitude}})}

  render() {
    return (
      <ScrollView bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Layout style={styles.container}>
      <Text category='h5'>Choose Categories</Text>
        <Select
          data={this.categories}
          multiSelect={true}
          selectedOption={this.state.categories}
          onSelect={this.onSelectCat}
          placeholder='Aloha+ Categories'/>
        

        <AddProject2 categories={this.state.categories}/>

        <Text category='h5'>Project Details</Text>
        <Input
          placeholder='Title'
          value={this.state.title}
          onChangeText={this.onTitleChange}/>
        <Input
          placeholder='Description'
          value={this.state.description}
          onChangeText={this.onDescriptionChange}
          TextInputProps={{multiline: true}}/>


        <Text category='h5'>Project Timeframe</Text>
        <RangeDatepicker
          range={this.state.range}
          onSelect={this.onSelectDays}/>
      
        <Text category='h5'>Project Location</Text>
        <MapPicker
            style={styles.map}
            initialCoordinate={{
              latitude: 21.30669665310,
              longitude: -157.86562565,
            }}
            onLocationSelect={({latitude, longitude})=>this.onCoordsChange({latitude,longitude})}/>
      {console.log(this.state)}

      {/* <TouchableWithoutFeedback
        onPress={() => {
          Axios.post('http://localhost:3000/project', {
            name: this.state.title,
            summary: this.state.description,
            latitude: 10,
            longitude: 10,
            image: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg'
          })
        }}
      > */}
        <Button style={styles.form} status='success'>Submit</Button>

      {/* </TouchableWithoutFeedback> */}
    </Layout>
    </TouchableWithoutFeedback>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding:20,},
  map: { height: 200,
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    marginVertical: 8,},
  form: { padding: 20, marginBottom:30},
});
