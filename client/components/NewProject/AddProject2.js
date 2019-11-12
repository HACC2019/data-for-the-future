import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, Layout, Select } from 'react-native-ui-kitten';


// Select Indicators from Categories
export class AddProject2 extends React.Component {

  // grab list of indicators from the category
  data = [
    { text: 'Vehicle Miles Traveled per Vehicle' },
    { text: 'Commuter Mode Share' },
    { text: 'Fuel use for Transportation' },
  ];

  state = {
    indicators: [],
  };

  onSelect = (indicators) => {
    this.setState({ indicators });
  };

  render() {
    return (
      <Layout>
        <Text category='h5'>Choose Indicators</Text>
        <Text category='label'>Clean Energy</Text>
        <Select
          data={this.data}
          multiSelect={true}
          selectedOption={this.state.indicators}
          onSelect={this.onSelect}
          placeholder='Category Indicators'
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});