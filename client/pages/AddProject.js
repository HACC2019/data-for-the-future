import React from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { AddProject1 } from '../components/AddProject/AddProject1';
import { AddProject2 } from '../components/AddProject/AddProject2';
import { AddProject3 } from '../components/AddProject/AddProject3';
import { AddProject4 } from '../components/AddProject/AddProject4';


//TODO
// - upload picture
// - google maps: choose location
// - set hostid = currentuserid

export class AddProject extends React.Component {

  state = {
    categories: [],
    indicators: [],
    title: '',
    description: '',
    email: '',
    phone: '',
    range: {
      startDate: null,
      endDate: null,
    },
    submit: false
  };

  seeForm() {
    return (
    <Layout>
      <Text>{this.state.range.categories}</Text>
      <Text>{this.state.title}</Text>
      <Text>{this.state.desciption}</Text>
      <Text>{this.state.range.startDate}</Text>
    </Layout>
    )
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Layout style={styles.container}>
      <AddProject1/>
      <AddProject2/>
      <AddProject3/>
      <AddProject4/>
      
      <Button status='basic'>Save Draft</Button>
      <Button status='success' onPress={() => {console.log(this.state.title)}}>Submit</Button>
      {this.state.submit && this.seeForm()}
    </Layout>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
