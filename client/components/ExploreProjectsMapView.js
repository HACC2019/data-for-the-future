import React from "react";
import PropTypes from 'prop-types';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Animated, Image, Dimensions, } from "react-native";
import MapView from "react-native-maps";
import { ProjectCard } from "../components/ProjectCard";


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 175;
const CARD_WIDTH = width-32;


export class ExploreProjectsMapView extends React.Component {



state = {
    region: {
        latitude: 21.30669665310,
        longitude: -157.86562565,
        latitudeDelta: 0.03864195044303443,
        longitudeDelta: 0.030142817690068,
    },
    markers: this.props.markers
}


    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
      }


      componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({ value }) => {
          let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
          if (index >= this.state.markers.length) {
            index = this.state.markers.length - 1;
          }
          if (index <= 0) {
            index = 0;
          }
    
          clearTimeout(this.regionTimeout);
          this.regionTimeout = setTimeout(() => {
            if (this.index !== index) {
              this.index = index;
              coord = {
                  latitude: this.state.markers[index].lat,
                  longitude: this.state.markers[index].long,
              }
              const { coordinate } = { coord };
              this.map.animateToRegion(
                {
                  ...coord,
                  latitudeDelta: this.state.region.latitudeDelta,
                  longitudeDelta: this.state.region.longitudeDelta,
                },
                350
              );
            }
          }, 10);
        });
      }


  render() {

    const interpolations = this.state.markers.map((marker, index) => {
        const inputRange = [
          (index - 1) * (CARD_WIDTH),
          index * CARD_WIDTH,
          ((index + 1) * CARD_WIDTH),
        ];
        const scale = this.animation.interpolate({
          inputRange,
          outputRange: [1, 2.5, 1],
          extrapolate: "clamp",
        });
        const opacity = this.animation.interpolate({
          inputRange,
          outputRange: [0.35, 1, 0.35],
          extrapolate: "clamp",
        });
        return { scale, opacity };
      });


    return (
      <View style={styles.container}>
        <MapView ref={map => this.map = map} 
        initialRegion={this.state.region}
        style={styles.container}>

            {this.state.markers.map((marker) => {
                return (
                <MapView.Marker key={marker.id} coordinate={{latitude: marker.lat, longitude: marker.long}}>
                    <Animated.View style={[styles.markerWrap]}>
                    <Animated.View style={[styles.ring]} />
                    <View style={styles.marker} />
                    </Animated.View>
                </MapView.Marker>
                );
            })}
            </MapView>


            <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH+20}
            onScroll={Animated.event([{nativeEvent: {
                    contentOffset: {
                        x: this.animation,
                    },},},],
                { useNativeDriver: true })}
            style={styles.scrollView}
            contentContainerStyle={styles.endPadding}>

            {this.state.markers.map((marker, index) => {
            
                const scaleStyle = {
                    transform: [{scale: interpolations[index].scale,},],};
                const opacityStyle = {opacity: interpolations[index].opacity,};           
            
                return (
                    <View style={styles.card} key={marker.id}>
                        <ProjectCard
                        projectTitle={marker.name}
                        projectDate={new Date(marker.endsAt).toDateString()}
                        projectParticipants={marker.people.length}
                        projectImage={marker.image}
                        project={marker}>
                        </ProjectCard>
                    </View>
                );
            } ) }
            </Animated.ScrollView>

      </View>
    );
  }
}

ExploreProjectsMapView.propTypes = {
    categoryId: PropTypes.number,
    markers: PropTypes.array
  }
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      elevation: 2,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      paddingLeft: 10,
      marginHorizontal: 10,
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "rgba(130,4,150, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(130,4,150, 0.5)",
    },
  });