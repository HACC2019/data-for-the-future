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

  onSelectDays = (range) => {
    this.setState({ range });
  };

  render() {
    return (
      <Layout>
      <Text category='h5'>Project Timeframe</Text>
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
    flexDirection: 'row',
  },
});
