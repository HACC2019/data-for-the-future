import React from 'react';
import { ScrollView, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
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

  render() {
    return (
      <ScrollView bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Layout style={styles.container}>
      <AddProject1 style={styles.form}/>
      <AddProject2 style={styles.form}/>
      <AddProject3 style={styles.form}/>
      <AddProject4 style={styles.form}/>
      
      <Button style={styles.form} status='success'>Submit</Button>
    </Layout>
    </TouchableWithoutFeedback>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingVertical: 8},
  form: { padding: 20, marginVertical: 20},
});
