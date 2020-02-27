import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ScrollView, ScrollViewProps, StyleSheet, View  } from 'react-native';
import { Button, Layout, Text, List } from 'react-native-ui-kitten';
import { ProjectCard } from '../components/ProjectCard';
import { CategoryHeader } from '../components/CategoryHeader';
import { Actions } from 'react-native-router-flux';

export class ExploreCategoryProjects extends React.Component {
  state = {
    list: []
  }

  listdata = [
    {title: 'Waikiki Biking', date:'Nov 12', participants: 9, image: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg'},
    {title: 'Beach Cleanup', date:'Nov 13', participants: 10, image: 'https://carpwc.lbdcreative.pro/wp-content/uploads/2018/03/beachcleanup_nb-940d3801.jpeg' },
    {title: 'School Lunch Sorting', date:'Nov 20', participants: 15,  image: 'http://www.lesswaste.org.uk/wp-content/uploads/2016/03/Utilise-distro-350x220.jpg'},
    {title: 'KCC Farmers Market', date:'Dec 10', participants: 50,  image: 'https://www.hawaiiliving.com/blog/wp-content/uploads/2014/05/KCC-Farmers-Market-Sign.jpg'},
    {title: 'Restore the Forest', date:'Dec 30', participants: 20,  image: 'http://geographicconsulting.com/wp-content/uploads/2013/04/4-02Seast-640x475.jpg'},
  ]

  getProjects = async () => {
  }
  
  componentDidMount() {
    axios.get(`http://168.105.134.129:3000/project/categories/${this.props.category.id}`)
      .then(({ data }) => {
        this.setState({
          list: data
        })
      });
  }

  renderCard = ({item}) => (
    <ProjectCard projectTitle={`${item.title}`} projectDate={`${item.date}`}
    projectParticipants={item.participants} projectImage={`${item.image}`}/>
  )
  
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
            <List contentContainerStyle={styles.listStyle} data={this.list}
            renderItem={this.renderCard}/>
        </ScrollView>
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
