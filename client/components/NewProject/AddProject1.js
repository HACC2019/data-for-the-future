import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Select } from 'react-native-ui-kitten';

// Select Categories
export class AddProject1 extends React.Component {

  data = [
    { text: 'Clean Energy' },
    { text: 'Local Food' },
    { text: 'Natural Resource Management' },
    { text: 'Waste Reduction' },
    { text: 'Smart Sustainable Communities' },
    { text: 'Green Education & Workforce' },
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