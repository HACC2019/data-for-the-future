import React from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, ScrollView, View  } from 'react-native';
import { CategoryHeader } from '../components/CategoryHeader';
import { Indicator } from '../components/ProjectPage/Indicator';



// filter projects that are in this category
// check if item.categories contains this.props.category.id

// for each indicator in the category
// display Indicat

// loop through stats
// pass stats.indId to Indicator component
// pass stats.value to Indicator component


// in AddProjectForm
// append to stats {indId: selectedInd, value: 0}


export class DashboardCat extends React.Component {



stats = [
    { indId: 1,
    value: 23,
    },
    { indId: 3,
    value: 10,
    },
    { indId: 4,
    value: 223,
    },
];


  render() {
    return (
      <ScrollView style={styles.container} bounces={false} bouncesZoom={false} 
        alwaysBounceVertical={false} alwaysBounceHorizontal={false} {...this.props}>
            <CategoryHeader style={{flex: 1}} categoryTitle={this.props.category.title}
            categoryDescription={this.props.category.description}
            categoryIcon={this.props.category.icon}
            categoryBg={this.props.category.bg} 
            ategoryGoal={this.props.category.goal}></CategoryHeader>



            <View style={{flex: 1, padding: 10,}}>
            {this.stats.map((item) => (
                <Indicator key={item.indId} id={item.indId} value={item.value}/>
            ))}
            </View>
        </ScrollView>

    );
  }
}



DashboardCat.propTypes = {
  category: PropTypes.object
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
});
