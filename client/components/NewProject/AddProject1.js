import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Layout, Select } from 'react-native-ui-kitten';

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
    categories: [],
  };

  onSelect = (categories) => {
    this.setState({ categories });
  };

  render() {
    return (
      <Layout>
        <Text category='h5'>Choose Categories</Text>
        <Select
          data={this.data}
          multiSelect={true}
          selectedOption={this.state.categories}
          onSelect={this.onSelect}
          placeholder='Aloha+ Categories'
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