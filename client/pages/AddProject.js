import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { AddProject1 } from '../components/NewProject/AddProject1';
import { AddProject2 } from '../components/NewProject/AddProject2';
import { AddProject3 } from '../components/NewProject/AddProject3';
import { AddProject4 } from '../components/NewProject/AddProject4';


//todo: add upload picture, hostid= currentid, 

export const AddProject = () => (
  <Layout style={styles.container}>
    <Text category='label'>Choose Category</Text>
    <AddProject1/>
    <AddProject2/>
    <AddProject3/>
    <AddProject4/>
    
    <Button status='basic'>Save Draft</Button>
    <Button status='success'> Submit</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
});
