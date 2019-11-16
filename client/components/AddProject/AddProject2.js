import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import { Text, Layout, Select } from 'react-native-ui-kitten';


// Select Indicators from Categories
export class AddProject2 extends React.Component {


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


  cat1Ind = this.indicators.filter((item) => (item.categoryId == 1)).map((item) => ({'text':item.name, 'id':item.id}))
  cat2Ind = this.indicators.filter((item) => (item.categoryId == 2)).map((item) => ({'text':item.name, 'id':item.id}))
  cat3Ind = this.indicators.filter((item) => (item.categoryId == 3)).map((item) => ({'text':item.name, 'id':item.id}))
  cat4Ind = this.indicators.filter((item) => (item.categoryId == 4)).map((item) => ({'text':item.name, 'id':item.id}))
  cat5Ind = this.indicators.filter((item) => (item.categoryId == 5)).map((item) => ({'text':item.name, 'id':item.id}))
  cat6Ind = this.indicators.filter((item) => (item.categoryId == 6)).map((item) => ({'text':item.name, 'id':item.id}))



  state = {
    cat1:[], cat2:[],
    cat3:[], cat4:[],
    cat5:[], cat6:[],
  };

  onSelect1 = (cat1) => {this.setState({ cat1 });};
  onSelect2 = (cat2) => {this.setState({ cat2 });};
  onSelect3 = (cat3) => {this.setState({ cat3 });};
  onSelect4 = (cat4) => {this.setState({ cat4 });};
  onSelect5 = (cat5) => {this.setState({ cat5 });};
  onSelect6 = (cat6) => {this.setState({ cat6 });};

  render() {
    return (
      <Layout>
        <Text category='h5'>Choose Indicators</Text>
        <Select
          data={this.cat1Ind} placeholder="Clean Energy"
          disabled={!(this.props.categories.some(cat => cat.id == 1))}
          multiSelect={true} selectedOption={this.state.cat1}
          onSelect={this.onSelect1}/>
        <Select
          data={this.cat2Ind} placeholder="Local Food"
          disabled={!(this.props.categories.some(cat => cat.id == 2))}
          multiSelect={true} selectedOption={this.state.cat2}
          onSelect={this.onSelect2}/>
        <Select
          data={this.cat3Ind} placeholder="Natural Resources"
          disabled={!(this.props.categories.some(cat => cat.id == 3))}
          multiSelect={true} selectedOption={this.state.cat3}
          onSelect={this.onSelect3}/>
        <Select
          data={this.cat4Ind} placeholder="Waste Management"
          disabled={!(this.props.categories.some(cat => cat.id == 4))}
          multiSelect={true} selectedOption={this.state.cat4}
          onSelect={this.onSelect4}/>
        <Select
          data={this.cat5Ind} placeholder="Sustainable Communities"
          disabled={!(this.props.categories.some(cat => cat.id == 5))}
          multiSelect={true} selectedOption={this.state.cat5}
          onSelect={this.onSelect5}/>
        <Select
          data={this.cat6Ind} placeholder="Education & Workforce"
          disabled={!(this.props.categories.some(cat => cat.id == 6))}
          multiSelect={true} selectedOption={this.state.cat6}
          onSelect={this.onSelect6}/>
      </Layout>
    );
  }
}



AddProject2.propTypes = {
  categories: PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});