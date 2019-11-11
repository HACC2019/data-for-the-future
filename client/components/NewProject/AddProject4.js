import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, RangeDatepicker, Text } from 'react-native-ui-kitten';

export class AddProject4 extends React.Component {

  state = {
    range: {
      startDate: null,
      endDate: null,
    },
  };

  onSelect = (range) => {
    this.setState({ range });
  };

  render() {
    return (
      <Layout style={styles.container}>
      <Text>Choose a start date & end date. If the project is ongoing or recurring, only choose a single start date.</Text>
        <RangeDatepicker
          range={this.state.range}
          onSelect={this.onSelect}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
