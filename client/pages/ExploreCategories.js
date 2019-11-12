import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View  } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';


export class ExploreCategories extends React.Component {

  state = {
  };

  render() {
    return (
        <ScrollView bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  listStyle: { paddingHorizontal: 16, paddingVertical: 8,},

});
