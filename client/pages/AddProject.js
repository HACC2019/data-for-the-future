import React from 'react';
import { ScrollView, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { AddProject1 } from '../components/AddProject/AddProject1';
import { AddProject2 } from '../components/AddProject/AddProject2';
import { AddProject3 } from '../components/AddProject/AddProject3';
import { AddProject4 } from '../components/AddProject/AddProject4';
import Axios from 'axios';


//TODO
// - upload picture
// - google maps: choose location
// - set hostid = currentuserid

export class AddProject extends React.Component {

  cat = (category) => {
    switch (category.id) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;    
      default:
        break;
    }
  }


  initialFormState = {
    id: null,
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
    participants: 0,
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
      
      {/* <TouchableWithoutFeedback onPress={() => {
          Axios.post('http://localhost:3000/project', {
            name: this.state.title,
            summary: this.state.description,
            latitude: 10,
            longitude: 10,
            image: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg'
          }) }}> */}
          <TouchableWithoutFeedback>
        <Button style={styles.form} status='success'>Submit</Button>
      </TouchableWithoutFeedback>
    </Layout>
    </TouchableWithoutFeedback>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, paddingVertical: 8},
  form: { padding: 20, marginBottom:30},
});
