import React from 'react';
// import MapView from 'react-native-maps';
//import LocationView from "react-native-location-view";
import MapPicker from "react-native-map-picker";

import { StyleSheet, Text, View, Dimensions } from 'react-native';

  export class Mapp extends React.Component {
    render() {
      return (
        <View style={{flex:1}}>
        {/* <MapView style={styles.mapStyle}></MapView> */}
        {/* <LocationView style={{flex:1, flexDirection: 'row'}}
          apiKey={"AIzaSyC5ZQtJ6PxuKmx9LkKaC9B02SKE4GBvRKg"}
          initialLocation={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        /> */}
        <MapPicker
          initialCoordinate={{
            latitude: 21.30669665310,
            longitude: -157.86562565,
          }}
          onLocationSelect={({latitude, longitude})=>console.log(longitude, latitude)}
        />

      </View>
      );
    }
  }
  
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });