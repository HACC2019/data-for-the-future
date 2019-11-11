import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout } from 'react-native-ui-kitten';

export class AddProject3 extends React.Component {

  state = {
    title: '',
    description: '',
  };

  onTitleChange = (title) => {
    this.setState({ title });
  };

  onDescriptionChange = (description) => {
    this.setState({ description });
  };

  render() {
    return (
      <Layout>
        <Input
          placeholder='Title'
          value={this.state.title}
          onChangeText={this.onTitleChange}
        />
        <Input
          placeholder='Description'
          value={this.state.description}
          onChangeText={this.onDescriptionChange}
        />
      </Layout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  },

});