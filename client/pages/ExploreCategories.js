import React from 'react';
import { StyleSheet  } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';


export class ExploreCategories extends React.Component {

  state = {
    category:'',
  };


  render() {
    return (
      <Layout style={styles.container}>
    </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
