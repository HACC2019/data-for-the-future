import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ScrollView, Animated, Image, Dimensions, } from "react-native";
import MapView from "react-native-maps";
import { ProjectCard } from "../components/ProjectCard";


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 175;
const CARD_WIDTH = width-50;


export default class screens extends Component {



state = {
    region: {
        latitude: 21.30669665310,
        longitude: -157.86562565,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
    },
    markers: 
    [
        {
            "name": "Waikiki Biking",
            "lat": 21.293138,
            "long": -157.797854,
            "image": "http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg",
            "summary": "Join us for a day in the sun consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "endsat": "2019-12-16T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1,3],
            "indicators": [],
            "id": 1,
            "hostid": 10,
            "people": []
        },
        {
            "name": "Restore the Forest",
            "lat": 21.313137,
            "long": -157.780748,
            "image": "http://geographicconsulting.com/wp-content/uploads/2013/04/4-02Seast-640x475.jpg",
            "summary": "Help restore the aina consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1,3,5],
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
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
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
            "endsat": "2020-01-22T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
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
            "endsat": "2019-11-20T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1,2,3,4,5,6],
            "indicators": [],
            "id": 5,
            "hostid": 0,
            "people": [10]
        },
        {
            "name": "Kaimuki HS Lunch Sorting",
            "lat": 21.276471,
            "long": -157.800865,
            "image": "http://www.lesswaste.org.uk/wp-content/uploads/2016/03/Utilise-distro-350x220.jpg",
            "summary": "Reduce food waste dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-06T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
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
            "endsat": "2019-12-03T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
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
            "endsat": "2019-12-18T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [4],
            "indicators": [],
            "id": 8,
            "hostid": 10,
            "people": []
        },
        {
            "name": "Christmas Treecycling",
            "lat": 21.33895,
            "long": -157.953758,
            "image": "https://www.treetopshospice.org.uk/wp-content/uploads/2016/09/2017_01_07-Christmas-Treecycling-970x546px-970x546.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-16T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [4],
            "indicators": [],
            "id": 9,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Pumpkin Composting",
            "lat": 21.335112,
            "long": -157.97842,
            "image": "https://www.scarce.org/wp-content/uploads/2016/10/Compost-Me-pumpkin.png",
            "summary": "Its spooky season sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-27T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [4],
            "indicators": [],
            "id": 10,
            "hostid": 0,
            "people": [10]
        },
        {
            "name": "Bubble Run 2020",
            "lat": 21.375187,
            "long": -157.910385,
            "image": "https://photos-images.active.com/file/3/1/original/b5/73/b57386ea-2cea-4ce3-861e-755d454b113e.jpg",
            "summary": "Run for a cause, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [4],
            "indicators": [42,40],
            "id": 11,
            "hostid": 0,
            "people": []
        },
        {
            "name": "ALS Hawaii Walk",
            "lat": 21.317096,
            "long": -157.846184,
            "image": "http://web.alsa.org/images/friendraiser_uploads/13760.1519118417.customnull",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2020-01-22T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1,5,6],
            "indicators": [],
            "id": 12,
            "hostid": 10,
            "people": []
        },
        {
            "name": "5k Race for the Cure",
            "lat": 21.305475,
            "long": -157.83371,
            "image": "https://www.clearinghousecdfi.com/wp-content/uploads/2016/09/IMG_2724.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-20T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1,5,6],
            "indicators": [],
            "id": 13,
            "hostid": 0,
            "people": []
        },
        {
            "name": "BYO Metal Straw Starbucks",
            "lat": 21.307501,
            "long": -157.768021,
            "image": "https://i.ebayimg.com/images/g/XD4AAOSw1PJbGtEZ/s-l300.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-06T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [4,5],
            "indicators": [],
            "id": 14,
            "hostid": 0,
            "people": []
        },
        {
            "name": "BYO Metal Straw Teapresso",
            "lat": 21.277325,
            "long": -157.696037,
            "image": "https://scontent.cdninstagram.com/vp/4dbe0e5cd30649953fb02fe44bd6692c/5E30426F/t51.2885-15/sh0.08/e35/s640x640/65304698_143546063391123_4386199742362444400_n.jpg?_nc_ht=scontent.cdninstagram.com",
            "summary": "Save the turtles sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [4,5],
            "indicators": [33,32,40,39],
            "id": 15,
            "hostid": 10,
            "people": []
        },
    
        {
            "name": "Manoa Community Garden",
            "lat": 21.307607,
            "long": -157.812538,
            "image": "https://live.staticflickr.com/834/43184119522_36b6029baf_b.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-16T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [2,3,5],
            "indicators": [],
            "id": 17,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Dole Community Garden",
            "lat": 21.537828,
            "long": -158.012238,
            "image": "https://hiltonharvest.weebly.com/uploads/1/0/0/9/1009950/wftd-crew_orig.jpg",
            "summary": "Do you have a green thumb amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [2,3,5],
            "indicators": [38,22,18,19,39],
            "id": 19,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Makiki Community Garden",
            "lat": 21.294066,
            "long": -157.821121,
            "image": "https://www.hawaiimagazine.com/sites/default/files/field/image/hr%20garden.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2020-01-22T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [2,3,5],
            "indicators": [],
            "id": 20,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Kahala Beach Cleanup",
            "lat": 21.265274,
            "long": -157.812653,
            "image": "https://d3583ivmhhw2le.cloudfront.net/images/uploads/campaigns/No_Beach_Access_Photo_1.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [3],
            "indicators": [],
            "id": 21,
            "hostid": 10,
            "people": []
        },
        {
            "name": "Lani Kai Beach Cleanup",
            "lat": 21.428356,
            "long": -157.758636,
            "image": "http://www.hawaiioceanambassadors.com/uploads/5/8/9/7/58975063/published/1_22.jpg?1557191070",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-06T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [3],
            "indicators": [],
            "id": 22,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Kahaluu Forest Bathing",
            "lat": 21.379344,
            "long": -157.893219,
            "image": "https://www.gohawaii.com/sites/default/files/styles/event_full_display_large/public/mmg_lfef_images/forest-bathing-in-an-artists-garden-7372-9168.jpg?itok=Kh6SPS0z",
            "summary": "Enjoy the open green space amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-03T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [5],
            "indicators": [],
            "id": 23,
            "hostid": 0,
            "people": [10]
        },
        {
            "name": "Kawainui Marsh Restoration",
            "lat": 21.308354,
            "long": -157.813339,
            "image": "http://www.hhf.com/wp-content/uploads/2014/06/Net31-700x411.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-16T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [3],
            "indicators": [],
            "id": 24,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Maunalua Bay Restoration",
            "lat": 21.274019,
            "long": -157.760696,
            "image": "http://www.malamamaunalua.org/wp-content/uploads/homeSlide-adopt-a-plot-photo.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [3],
            "indicators": [],
            "id": 25,
            "hostid": 10,
            "people": []
        },
        {
            "name": "Chasing Coral Film Screening",
            "lat": 21.301317,
            "long": -157.729912,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qY_a94c5a1ggMJdvoaWv-QyYy7GiUIXBXq7ed-aL8LXMVYe5&s",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-27T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [6],
            "indicators": [],
            "id": 26,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Shelter Food Kitchen",
            "lat": 21.296732,
            "long": -157.815399,
            "image": "https://4f2bur4nuye2cgakm2rm61qk-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/ServingFoodShelter_AdobeStock_63086252.jpeg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-18T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [5],
            "indicators": [],
            "id": 27,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Drink FloWater",
            "lat": 21.278178,
            "long": -157.824669,
            "image": "https://www.myflowater.com/wp-content/uploads/2018/01/filter-0-14-15.png",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2020-01-22T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1,4,5],
            "indicators": [],
            "id": 28,
            "hostid": 10,
            "people": []
        },
        {
            "name": "Free Clothesline Pins",
            "lat": 21.279031,
            "long": -157.768707,
            "image": "https://images-na.ssl-images-amazon.com/images/I/71HDik7g1RL._SL1500_.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-20T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1],
            "indicators": [],
            "id": 29,
            "hostid": 0,
            "people": []
        },
        {
            "name": "CFL Lightbulb Sale",
            "lat": 21.336924,
            "long": -157.902031,
            "image": "https://www.adorama.com/images/Large/az106955fs.jpg",
            "summary": "Switch out your bulb amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-06T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1],
            "indicators": [],
            "id": 30,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Purple Maia Prize Kickoff",
            "lat": 21.321893,
            "long": -157.871819,
            "image": "https://i0.wp.com/purplemaia.org/wp-content/uploads/2017/10/Screen-Shot-2017-10-13-at-5.14.15-PM.png?fit=597%2C590&ssl=1",
            "summary": "Learn about innovative sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-03T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [6],
            "indicators": [],
            "id": 31,
            "hostid": 10,
            "people": []
        },
        {
            "name": "Volunteer Purple Maia",
            "lat": 21.320294,
            "long": -157.85305,
            "image": "https://i1.wp.com/www.hawaiiweblog.com/wp-content/uploads/2015/12/purple-maia-01-1024x512.jpg?resize=720%2C360",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-12-16T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [6],
            "indicators": [],
            "id": 32,
            "hostid": 0,
            "people": [10]
        },
        {
            "name": "LED Lightbulb Sale",
            "lat": 21.331701,
            "long": -157.706909,
            "image": "https://images.prod.meredith.com/product/0dcf116987a0e4b6e1e2d033d91b9861/1501565549916/l/a19-9-5-watt-led-lightbulb-dimmable",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1],
            "indicators": [],
            "id": 33,
            "hostid": 10,
            "people": []
        },
        {
            "name": "Data for the Future",
            "lat": 21.301317,
            "long": -157.74559,
            "image": "https://hknhawaii.weebly.com/uploads/7/5/3/8/7538427/published/img-0263.jpg?1571902952",
            "summary": "Improving data collection sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1,2,3,4,5,6],
            "indicators": [],
            "id": 5,
            "hostid": 10,
            "people": []
        },
        {
            "name": "Discounted Bus Passes",
            "lat": 21.264634,
            "long": -157.791023,
            "image": "http://www.ccclarion.com/wp-content/uploads/2015/09/BUS-ASTRID.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [1,5],
            "indicators": [],
            "id": 16,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Manoa Community Garden",
            "lat": 21.307607,
            "long": -157.812538,
            "image": "https://live.staticflickr.com/834/43184119522_36b6029baf_b.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [2,3,5],
            "indicators": [],
            "id": 17,
            "hostid": 0,
            "people": []
        },
        {
            "name": "Ala Wai Community Garden",
            "lat": 21.274978,
            "long": -157.82341,
            "image": "http://www.cityfarmer.info/wp-content/uploads/2010/08/honol3.jpg",
            "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "endsat": "2019-11-01T10:00:00.000Z",
            "startsat": "2019-10-31T10:00:00.000Z",
            "categories": [2,3,5],
            "indicators": [],
            "id": 18,
            "hostid": 0,
            "people": []
        }
    ]
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
              const { coordinate } = {longitude: this.state.markers[index].long, latitude:this.state.markers[index].lat,};
              this.map.animateToRegion(
                {
                  ...coordinate,
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
          (index - 1) * CARD_WIDTH,
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
            snapToInterval={CARD_WIDTH}
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
                        projectDate={new Date(marker.endsat).toDateString}
                        projectParticipants={marker.people.length}
                        projectImage={marker.image}>
                        </ProjectCard>
                    </View>
                );
            } ) }
            </Animated.ScrollView>

      </View>
    );
  }
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
      padding: 10,
      elevation: 2,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
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