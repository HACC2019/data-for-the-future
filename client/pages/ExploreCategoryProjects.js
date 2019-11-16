import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ScrollView, ScrollViewProps, StyleSheet, View  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { ProjectCard } from '../components/ProjectCard';
import { CategoryHeader } from '../components/CategoryHeader';
import { Actions } from 'react-native-router-flux';
import { FloatingAction } from "react-native-floating-action";



export class ExploreCategoryProjects extends React.Component {
  state = {
    list: []
  }


  projectList = [
    {
        "name": "Waikiki Biking",
        "lat": 21.272508,
        "long": -157.823371,
        "image": "http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg",
        "summary": "Join us for a day in the sun consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "endsAt": "2019-12-16T10:00:00.000Z",
        "startsAt": "2019-10-31T10:00:00.000Z",
        "categories": [1,5],
        "indicators": [],
        "id": 1,
        "hostid": 10,
        "people": []
    },
    {
        "name": "Restore the Forest",
        "lat": 21.313137,
        "long": -157.780748,
        "image": "https://media.bizj.us/view/img/11109639/credit-nate-yuen-intro-native-forest-pano-00-2500*750xx1716-966-0-0.jpg",
        "summary": "Help restore the aina consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "endsAt": "2019-11-01T10:00:00.000Z",
        "startsAt": "2019-10-31T10:00:00.000Z",
        "categories": [3,5],
        "indicators": [27,29,30],
        "id": 2,
        "hostid": 0,
        "people": []
    },
    {
        "name": "KCC Farmers Market",
        "lat": 21.26842,
        "long": -157.797295,
        "image": "https://www.hawaiiliving.com/blog/wp-content/uploads/2014/05/KCC-Farmers-Market-Sign.jpg",
        "summary": "Support local farmers and buy produce grown here in Hawaii  eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "endsAt": "2019-11-01T10:00:00.000Z",
        "startsAt": "2019-10-31T10:00:00.000Z",
        "categories": [2,5],
        "indicators": [24,21,19,18,17,22,38],
        "id": 3,
        "hostid": 10,
        "people": []
    },
    {
        "name": "Waikiki Beach Cleaup",
        "lat": 21.276717,
        "long": -157.826929,
        "image": "https://carpwc.lbdcreative.pro/wp-content/uploads/2018/03/beachcleanup_nb-940d3801.jpeg",
        "summary": "Beautify our most popular amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "endsAt": "2020-01-22T10:00:00.000Z",
        "startsAt": "2019-10-31T10:00:00.000Z",
        "categories": [3,4,5],
        "indicators": [33,32,30,38,40],
        "id": 4,
        "hostid": 0,
        "people": [10]
    },
    {
        "name": "Data for the Future",
        "lat": 21.301317,
        "long": -157.74559,
        "image": "https://hknhawaii.weebly.com/uploads/7/5/3/8/7538427/published/img-0263.jpg?1571902952",
        "summary": "Improve data collection ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "endsAt": "2019-11-20T10:00:00.000Z",
        "startsAt": "2019-10-31T10:00:00.000Z",
        "categories": [6],
        "indicators": [],
        "id": 5,
        "hostid": 0,
        "people": []
    },
    {
        "name": "Kaimuki HS Lunch Sorting",
        "lat": 21.276471,
        "long": -157.800865,
        "image": "http://www.lesswaste.org.uk/wp-content/uploads/2016/03/Utilise-distro-350x220.jpg",
        "summary": "Reduce food waste dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "endsAt": "2019-12-06T10:00:00.000Z",
        "startsAt": "2019-10-31T10:00:00.000Z",
        "categories": [2,4],
        "indicators": [],
        "id": 6,
        "hostid": 0,
        "people": []
    },
    {
        "name": "E-Waste Collection",
        "lat": 21.323492,
        "long": -158.002396,
        "image": "http://pratisrutiplus.com/wp-content/uploads/2017/05/EWasteimg1.jpg",
        "summary": "Bring your computer amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "endsAt": "2019-12-03T10:00:00.000Z",
        "startsAt": "2019-10-31T10:00:00.000Z",
        "categories": [4],
        "indicators": [],
        "id": 7,
        "hostid": 0,
        "people": []
    },
    {
        "name": "GoodWill Collection",
        "lat": 21.297585,
        "long": -157.858772,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Birw5JnZv1IqCVREL8qOou8GV4zU7slu-2CPZ_ZnLn7BIBET&s",
        "summary": "Donate used clothes amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "endsAt": "2019-12-18T10:00:00.000Z",
        "startsAt": "2019-10-31T10:00:00.000Z",
        "categories": [4],
        "indicators": [],
        "id": 8,
        "hostid": 10,
        "people": []
    }
]

  listdata = this.projectList.filter((item) => (
    item.categories.includes(this.props.category.id)
))

  // getProjects = async () => {
  // }
  
  // componentDidMount() {
  //   axios.get(`http://168.105.134.129:3000/project/categories/${this.props.category.id}`)
  //     .then(({ data }) => {
  //       this.setState({
  //         list: data
  //       })
  //     });
  // }


  

  render() {
    return (
      <View style={styles.container}>
      <CategoryHeader style={{flex: 1}}
        categoryTitle={this.props.category.title}
        categoryDescription={this.props.category.description}
        categoryIcon={this.props.category.icon}
        categoryBg={this.props.category.bg} 
        categoryGoal={this.props.category.goal}>
      </CategoryHeader>
      
        <ScrollView style={{flex:5}} bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
          

            <View style={styles.listStyle}>
            {this.listdata.map( (marker, index) => (
                <ProjectCard key={index}
                  projectName={marker.name} categories={marker.categories} summary={marker.summary} 
                  date={new Date(marker.endsAt).toDateString()}
                  people={marker.people}
                  image={marker.image}
                  lat={marker.lat} long={marker.long} report=""
                  stats={marker.stats} host={marker.hostid}/> ))
            }
            </View>
        </ScrollView>
        <FloatingAction
          actions={[{text: "Map", icon: require("../assets/icon-marker.png"), name:"map", position:1}]}
          overrideWithAction
          position="right" color= "#000000"  buttonSize={70} iconWidth={40} iconHeight={40}
          onPressItem={ () => Actions.ExploreProjectsMapView({markers: this.listdata}) }/>
      </View>
    );
  }
}

ExploreCategoryProjects.propTypes = {
  category: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  listStyle: { paddingHorizontal: 16, paddingVertical: 8},
});
