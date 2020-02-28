import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-ui-kitten';





export class Indicator extends React.Component {


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


    ind = this.indicators.filter((item) => (
        item.id == this.props.id
    ))[0];

  render() {
    return (
    <View style={styles.container}>
        <Text style={{flex: 1, flexWrap: 'wrap'}} category="h6">
            {this.ind.name}
        </Text>

        <View style={{padding:15, flex: 1, flexDirection: 'row'}}>

            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{marginLeft:10}} category='h3'>
                    {this.props.value}
                </Text>
            </View>

            <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center',alignItems:'center',alignContent:'center'}}>
                <Text category='h6'> 
                    {this.ind.unit}
                </Text>
                <Text style={{flex: 1, flexWrap: 'wrap'}} category='s2'> 
                    {this.ind.description}
                </Text>
            </View>
        </View>
    </View>
    );
  }
}

Indicator.propTypes = {
  id: PropTypes.number,
  value: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});