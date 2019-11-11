import React from 'react';
import { StyleSheet } from 'react-native';

import { Layout, Select } from 'react-native-ui-kitten';


// Select Indicators from Categories
export class AddProject2 extends React.Component {

  // grab list of indicators from the category
  data = [
    { text: 'Vehicle Miles Traveled per Vehicle' },
    { text: 'Commuter Mode Share' },
    { text: 'Fuel use for Transportation' },
  ];

  state = {
    selectedOption: [],
  };

  onSelect = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    return (
      <Layout>
        <Select
          data={this.data}
          multiSelect={true}
          selectedOption={this.state.selectedOption}
          onSelect={this.onSelect}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});