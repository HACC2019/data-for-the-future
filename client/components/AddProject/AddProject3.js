import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Text, Layout } from 'react-native-ui-kitten';

export class AddProject3 extends React.Component {

  state = {
    title: '',
    description: '',
    email: '',
    phone: '',
    location:''
  };

  onTitleChange = (title) => {
    this.setState({ title });
  };

  onDescriptionChange = (description) => {
    this.setState({ description });
  };
  onEmailChange = (email) => {
    this.setState({ email });
  };
  onPhoneChange = (phone) => {
    this.setState({ phone });
  };

  onLocationChange = (location) => {
    this.setState({ location });
  };

  render() {
    return (
      <Layout>
        <Text category='h5'>Project Details</Text>
        <Input
          placeholder='Title'
          value={this.state.title}
          onChangeText={this.onTitleChange}
        />
        <Input
          placeholder='Description'
          value={this.state.description}
          onChangeText={this.onDescriptionChange}
          style={styles.description}
          TextInputProps={{multiline: true}}

        />
        <Input
          placeholder='Contact Email'
          value={this.state.email}
          onChangeText={this.onEmailChange}
        />
        <Input
          placeholder='Contact Phone'
          value={this.state.phone}
          onChangeText={this.onPhoneChange}
        />
        <Input
          placeholder='Location'
          value={this.state.location}
          onChangeText={this.onLocationChange}
        />

      </Layout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  description: {
    height: 'auto',
  }

});